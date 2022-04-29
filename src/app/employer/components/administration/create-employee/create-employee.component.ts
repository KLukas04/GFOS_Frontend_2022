import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  public mockExpertiseAreas: string[] = [
    'Softwareentwicklung',
    'IT-Sicherheit',
    'Marketing',
    'Human Ressources',
    'Buchhaltung',
    'Kundendienst ',
    'Vertrieb',
    'Techniker',
    'Produktion',
    'Einkauf',
  ];

  public firstNameControl: FormControl = new FormControl(null);
  public lastNameControl: FormControl = new FormControl(null);
  public emailControl: FormControl = new FormControl(null);
  public phoneControl: FormControl = new FormControl(null);
  public passwordControl: FormControl = new FormControl(null);
  public sectionControl: FormControl = new FormControl(null);

  constructor(private store: Store<fromReducer.EmployerState>) {}

  ngOnInit(): void {}

  public saveFirstName(): void {
    this.store.dispatch(
      fromActions.newEmployerFirstNameInserted({
        firstName: this.firstNameControl.value,
      })
    );
  }

  public saveLastName(): void {
    this.store.dispatch(
      fromActions.newEmployerLastNameInserted({
        lastName: this.lastNameControl.value,
      })
    );
  }

  public saveEmail(): void {
    this.store.dispatch(
      fromActions.newEmployerEmailInserted({
        email: this.emailControl.value,
      })
    );
  }

  public savePhone(): void {
    this.store.dispatch(
      fromActions.newEmployerPhoneInserted({
        phone: this.phoneControl.value,
      })
    );
  }

  public savePassword(): void {
    this.store.dispatch(
      fromActions.newEmployerPasswordInserted({
        password: this.passwordControl.value,
      })
    );
  }

  public saveSection(): void {
    this.store.dispatch(
      fromActions.newEmployerSectionInserted({
        section: this.sectionControl.value,
      })
    );
  }

  public saveNewEmployer(): void {
    this.store.dispatch(fromActions.saveNewEmployer());
  }
}
