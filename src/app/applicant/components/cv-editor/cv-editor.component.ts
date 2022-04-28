import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';

import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent, PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

import { InterestDialogComponent } from '../interest-dialog/interest-dialog.component';
import { Observable, take, of, timer } from 'rxjs';
import { getOrElse, RemoteData } from 'ngx-remotedata';
import { Interessenfeld } from '../../models/interessenfeld.model';
import { HttpErrorResponse } from '@angular/common/http';

import {tuiPure} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';
import {map, mapTo, share, startWith, switchMap, tap} from 'rxjs/operators';

import * as fromSelectors from '../../store/applicant.selectors';
import { FormControl } from '@angular/forms';
import { Account } from '../../models/account.model';
import { Address } from '../../models/address.model';
import { UpdateProfilpicDialogComponent } from '../update-profilpic-dialog/update-profilpic-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { TuiPdfViewerService, TuiPdfViewerOptions } from '@taiga-ui/kit';

class RejectedFile {
  constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function convertRejected({file, reason}: RejectedFile): TuiFileLike {
  return {
      name: file.name,
      size: file.size,
      type: file.type,
      content: reason,
  };
}

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss'],
})
export class CvEditorComponent implements OnInit {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  newInterest = '';

  pdfInBase64 = 'data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==\n';
  
  public firstNameControl: FormControl = new FormControl(null);
  public lastNameControl: FormControl = new FormControl(null);
  public emailControl: FormControl = new FormControl(null);
  public phoneControl: FormControl = new FormControl(null);

  public streetControl: FormControl = new FormControl(null);
  public numberControl: FormControl = new FormControl(null);
  public plzControl: FormControl = new FormControl(null);
  public townControl: FormControl = new FormControl(null);
  public countryControl: FormControl = new FormControl(null);

  public interests$: Observable<
    RemoteData<Interessenfeld[], HttpErrorResponse>
  >;

  private readonly interestDialog = this.dialogService.open(
    new PolymorpheusComponent(InterestDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Neues Interesse',
    }
  );

  private readonly profilPicDialog = this.dialogService.open(
    new PolymorpheusComponent(UpdateProfilpicDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Neues Profilbild',
    }
  );

  constructor(
    private store: Store<fromReducer.ApplicantState>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService
  ) {
    this.interests$ = this.store.select(fromSelectors.selectInteressenfelder);

    this.store.select(fromSelectors.selectOwnAccount).subscribe((acc) => {
      const rawAccount: Account | null = getOrElse(acc, null);

      this.firstNameControl.setValue(rawAccount?.vorname ?? '');
      this.lastNameControl.setValue(rawAccount?.name ?? '');
      this.emailControl.setValue(rawAccount?.email ?? '');
      this.phoneControl.setValue(rawAccount?.telefon ?? '');
    });

    this.store.select(fromSelectors.selectOwnAddress).subscribe((address) => {
      const rawAddress: Address | null = getOrElse(address, null);

      this.streetControl.setValue(rawAddress?.strasse ?? '');
      this.numberControl.setValue(rawAddress?.hausnummer ?? '');
      this.plzControl.setValue(rawAddress?.plz ?? '');
      this.townControl.setValue(rawAddress?.stadt ?? '');
      this.countryControl.setValue(rawAddress?.land ?? '');
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLebenslaufStationen());
    this.store.dispatch(fromActions.loadInteressenfelder());
    this.store.dispatch(fromActions.loadOwnAccount());
    this.store.dispatch(fromActions.loadOwnAdress());
  }

  public saveFirstName(): void {
    this.store.dispatch(
      fromActions.newKontaktFirstName({
        firstName: this.firstNameControl.value,
      })
    );
  }

  public saveLastName(): void {
    this.store.dispatch(
      fromActions.newKontaktLastName({
        lastName: this.lastNameControl.value,
      })
    );
  }

  public saveEmail(): void {
    this.store.dispatch(
      fromActions.newKontaktEmailName({
        email: this.emailControl.value,
      })
    );
  }

  public savePhone(): void {
    this.store.dispatch(
      fromActions.newKontaktPhoneName({
        phone: this.phoneControl.value,
      })
    );
  }

  public updateAccount(): void {
    this.store.dispatch(fromActions.newKontaktUpdate());
  }

  public saveStreet(): void {
    this.store.dispatch(
      fromActions.newAddressStreet({
        street: this.streetControl.value,
      })
    );
  }

  public saveNumber(): void {
    this.store.dispatch(
      fromActions.newAddressNumber({
        number: this.numberControl.value,
      })
    );
  }

  public savePlz(): void {
    this.store.dispatch(
      fromActions.newAddressPlz({
        plz: this.plzControl.value,
      })
    );
  }

  public saveTown(): void {
    this.store.dispatch(
      fromActions.newAddressTown({
        town: this.townControl.value,
      })
    );
  }

  public saveCountry(): void {
    this.store.dispatch(
      fromActions.newAddressCountry({
        country: this.countryControl.value,
      })
    );
  }

  public updateAddress(): void {
    this.store.dispatch(fromActions.newAddressUpdate());
  }

  showInterestDialog() {
    this.interestDialog.subscribe();
  }

  showProfilPicDialog() {
    this.profilPicDialog.subscribe();
  }

  showPDF(actions: PolymorpheusContent<TuiPdfViewerOptions>, titel: string) {
    this.pdfService
      .open(
        this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfInBase64),
        {
          label: titel,
          actions,
        },
      )
      .subscribe();
  }

  readonly control = new FormControl();
 
    @tuiPure
    get loading$(): Observable<readonly File[]> {
        return this.requests$.pipe(
            map(file => (file instanceof File ? [file] : [])),
            startWith([]),
        );
    }
 
    @tuiPure
    get rejected$(): Observable<readonly TuiFileLike[]> {
        return this.requests$.pipe(
            map(file => (file instanceof RejectedFile ? [convertRejected(file)] : [])),
            tap(({length}) => {
                if (length) {
                    this.control.setValue(null);
                }
            }),
            startWith([]),
        );
    }
 
    @tuiPure
    private get requests$(): Observable<RejectedFile | File | null> {
        return this.control.valueChanges.pipe(
            switchMap(file =>
                file ? this.serverRequest(file).pipe(startWith(file)) : of(null),
            ),
            share(),
        );
    }
 
    private serverRequest(file: File): Observable<RejectedFile | File | null> {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result =
            delay % 2
                ? null
                : new RejectedFile(file, 'Server responded for odd number of time');
 
        return timer(delay).pipe(mapTo(result));
    }
}
