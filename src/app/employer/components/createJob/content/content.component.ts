import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiDay } from '@taiga-ui/cdk';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
  public mockTypesOfEmployment: string[] = [
    'Teilzeit',
    'Vollzeit',
    'Praktikum',
    'Ausbildung',
    'Duales Studium',
    'Minijob',
    'Werkstudent',
  ];

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

  public titleControl: FormControl = new FormControl(null);
  public typeControl: FormControl = new FormControl(null);
  public sectionControl: FormControl = new FormControl(null);
  public deadlineControl: FormControl = new FormControl(null);
  public startDateControl: FormControl = new FormControl(null);
  public temporaryControl: FormControl = new FormControl(false);
  public endControl: FormControl = new FormControl(null);

  public streetControl: FormControl = new FormControl(null);
  public numberControl: FormControl = new FormControl(null);
  public plzControl: FormControl = new FormControl(null);
  public townControl: FormControl = new FormControl(null);
  public countryControl: FormControl = new FormControl(null);

  public shortDescriptionControl: FormControl = new FormControl(null);
  public descriptionControl: FormControl = new FormControl(null);

  public vacationControl: FormControl = new FormControl(null);
  public remoteControl: FormControl = new FormControl(false);
  public wageMonthControl: FormControl = new FormControl(null);
  public wageYearControl: FormControl = new FormControl(null);
  public advantagesControl: FormControl = new FormControl(null);

  constructor(private store: Store<fromReducer.EmployerState>) {}

  ngOnInit(): void {}

  public saveTitle(): void {
    this.store.dispatch(
      fromActions.newJobTitleInserted({ title: this.titleControl.value })
    );
  }

  public saveType(): void {
    this.store.dispatch(
      fromActions.newJobTypeInserted({ typ: this.typeControl.value })
    );
  }

  public saveSection(): void {
    this.store.dispatch(
      fromActions.newJobSectionInserted({ section: this.sectionControl.value })
    );
  }

  public saveDeadline(): void {
    const input: TuiDay = this.deadlineControl.value;
    const date = new Date(input.year, input.month, input.day);
    this.store.dispatch(
      fromActions.newJobDeadlineInserted({
        deadline: date,
      })
    );
  }

  public saveStartDate(): void {
    const input: TuiDay = this.startDateControl.value;
    const date = new Date(input.year, input.month, input.day);
    this.store.dispatch(
      fromActions.newJobStartDateInserted({
        startDate: date,
      })
    );
  }

  public saveTemporary(): void {
    console.log(this.temporaryControl.value);
    this.store.dispatch(
      fromActions.newJobTemporaryInserted({
        temporary: this.temporaryControl.value,
      })
    );
  }

  public saveEndDate(): void {
    const input: TuiDay = this.endControl.value;
    const date = new Date(input.year, input.month, input.day);
    this.store.dispatch(fromActions.newJobEndDateInserted({ endDate: date }));
  }

  public saveStreet(): void {
    this.store.dispatch(
      fromActions.newJobStreetInserted({ street: this.streetControl.value })
    );
  }

  public saveNumber(): void {
    this.store.dispatch(
      fromActions.newJobNumberInserted({ number: this.numberControl.value })
    );
  }

  public savePlz(): void {
    this.store.dispatch(
      fromActions.newJobPlzInserted({ plz: this.plzControl.value })
    );
  }

  public saveTown(): void {
    this.store.dispatch(
      fromActions.newJobTownInserted({ town: this.townControl.value })
    );
  }

  public saveCountry(): void {
    this.store.dispatch(
      fromActions.newJobCountryInserted({ country: this.countryControl.value })
    );
  }

  public saveShortDescription(): void {
    this.store.dispatch(
      fromActions.newJobShortDescriptionInserted({
        shortDescription: this.shortDescriptionControl.value,
      })
    );
  }

  public saveDescription(): void {
    this.store.dispatch(
      fromActions.newJobDescriptionInserted({
        description: this.descriptionControl.value,
      })
    );
  }

  public saveVacation(): void {
    this.store.dispatch(
      fromActions.newJobVacationInserted({
        vacation: this.vacationControl.value,
      })
    );
  }

  public saveRemote(): void {
    this.store.dispatch(
      fromActions.newJobRemoteInserted({ remote: this.remoteControl.value })
    );
  }

  public saveWageMonth(): void {
    this.store.dispatch(
      fromActions.newJobWageMonthInserted({
        wageMonth: this.wageMonthControl.value,
      })
    );
  }

  public saveWageYear(): void {
    this.store.dispatch(
      fromActions.newJobWageYearInserted({
        wageYear: this.wageYearControl.value,
      })
    );
  }

  public saveAdvantages(): void {
    this.store.dispatch(
      fromActions.newJobAdvantagesInserted({
        advantages: this.advantagesControl.value,
      })
    );
  }

  public addNewJob(): void {
    this.store.dispatch(fromActions.saveNewJob());
  }
}
