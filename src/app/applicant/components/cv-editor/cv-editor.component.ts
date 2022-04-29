import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';

import { TuiDialogService } from '@taiga-ui/core';
import {
  PolymorpheusComponent,
  PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';

import { InterestDialogComponent } from '../interest-dialog/interest-dialog.component';
import { Observable } from 'rxjs';
import { getOrElse, RemoteData } from 'ngx-remotedata';
import { Interessenfeld } from '../../models/interessenfeld.model';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromSelectors from '../../store/applicant.selectors';
import { FormControl } from '@angular/forms';
import { Account } from '../../models/account.model';
import { Address } from '../../models/address.model';
import { UpdateProfilpicDialogComponent } from '../update-profilpic-dialog/update-profilpic-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { TuiPdfViewerService, TuiPdfViewerOptions } from '@taiga-ui/kit';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss'],
})
export class CvEditorComponent implements OnInit {
  public firstNameControl: FormControl = new FormControl(null);
  public lastNameControl: FormControl = new FormControl(null);
  public emailControl: FormControl = new FormControl(null);
  public phoneControl: FormControl = new FormControl(null);

  public streetControl: FormControl = new FormControl(null);
  public numberControl: FormControl = new FormControl(null);
  public plzControl: FormControl = new FormControl(null);
  public townControl: FormControl = new FormControl(null);
  public countryControl: FormControl = new FormControl(null);

  public cvControl: FormControl = new FormControl(null);

  public interests$: Observable<
    RemoteData<Interessenfeld[], HttpErrorResponse>
  >;

  public profilePic$: Observable<RemoteData<string, HttpErrorResponse>>;
  public pdfInBase64: string = '';
  private newFileBase64: any = '';

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
    @Inject(TuiPdfViewerService)
    private readonly pdfService: TuiPdfViewerService
  ) {
    this.interests$ = this.store.select(fromSelectors.selectInteressenfelder);
    this.profilePic$ = this.store.select(fromSelectors.selectProfilePic);

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

    this.store
      .select(fromSelectors.selectCvPdf)
      .subscribe((pdf) => (this.pdfInBase64 = getOrElse(pdf, '')));
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLebenslaufStationen());
    this.store.dispatch(fromActions.loadInteressenfelder());
    this.store.dispatch(fromActions.loadOwnAccount());
    this.store.dispatch(fromActions.loadOwnAdress());
    this.store.dispatch(fromActions.loadProfilePic());
    this.store.dispatch(fromActions.loadCv());
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

  public showInterestDialog() {
    this.interestDialog.subscribe();
  }

  public showProfilPicDialog() {
    this.profilPicDialog.subscribe();
  }

  public showPDF(
    actions: PolymorpheusContent<TuiPdfViewerOptions>,
    titel: string
  ) {
    this.pdfService
      .open(this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfInBase64), {
        label: titel,
        actions,
      })
      .subscribe();
  }

  public loadNewPdf(event: any): void {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.newFileBase64 = fileReader.result;
      };
    }
  }

  public saveNewPdf(): void {
    this.store.dispatch(
      fromActions.uploadNewCvPdf({ base64: this.newFileBase64 })
    );
  }

  public deleteCvPdf(): void {
    this.store.dispatch(fromActions.deleteCvPdf());
  }
}
