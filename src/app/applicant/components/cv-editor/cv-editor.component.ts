import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';

import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { InterestDialogComponent } from '../interest-dialog/interest-dialog.component';
import { Observable, take } from 'rxjs';
import { getOrElse, RemoteData } from 'ngx-remotedata';
import { Interessenfeld } from '../../models/interessenfeld.model';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromSelectors from '../../store/applicant.selectors';
import { FormControl } from '@angular/forms';
import { Account } from '../../models/account.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss'],
})
export class CvEditorComponent implements OnInit {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  newInterest = '';

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

  private readonly verifyDialog = this.dialogService.open(
    new PolymorpheusComponent(InterestDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Neues Interesse',
    }
  );

  constructor(
    private store: Store<fromReducer.ApplicantState>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
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
    this.verifyDialog.subscribe();
  }
}
