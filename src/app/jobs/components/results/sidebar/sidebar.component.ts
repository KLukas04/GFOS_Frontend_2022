import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromActions from '../../../store/jobs.actions';
import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  mockTypesOfEmployment: string[] = [
    'Teilzeit',
    'Vollzeit',
    'Praktikum',
    'Ausbildung',
    'Duales Studium',
    'Minijob',
    'Werkstudent',
  ];

  mockDistances: string[] = [
    '5 km',
    '10 km',
    '15 km',
    '20 km',
    '30 km',
    '40 km',
    '50 km',
  ];

  mockYearlyIncome: string[] = [
    '20000 €',
    '30000 €',
    '40000 €',
    '50000 €',
    '60000 €',
  ];

  holidays: string[] = ['30 Tage', '32 Tage', '34 Tage'];

  mockExpertiseAreas: string[] = [
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

  public fachgebietControl: FormControl = new FormControl(null);
  public typeControl: FormControl = new FormControl(null);
  public remoteControl: FormControl = new FormControl(false);
  public befristetControl: FormControl = new FormControl(false);
  public gehaltControl: FormControl = new FormControl(null);
  public urlaubControl: FormControl = new FormControl(null);

  constructor(private store: Store<fromReducer.JobsState>) {}

  ngOnInit(): void {}

  saveFachgebiet(): void {
    this.store.dispatch(
      fromActions.searchFilterFachgebiet({
        fachgebiet: this.fachgebietControl.value,
      })
    );
  }

  saveType(): void {
    this.store.dispatch(
      fromActions.searchFilterType({
        typ: this.typeControl.value,
      })
    );
  }

  saveRemote(): void {
    console.log('Toggle');
    this.store.dispatch(
      fromActions.searchFilterRemote({
        remote: this.remoteControl.value,
      })
    );
  }

  saveBefristet(): void {
    this.store.dispatch(
      fromActions.searchFilterBefristet({
        befristet: this.befristetControl.value,
      })
    );
  }

  saveGehalt(): void {
    this.store.dispatch(
      fromActions.searchFilterGehalt({
        gehalt: this.gehaltControl.value,
      })
    );
  }

  saveUrlaub(): void {
    this.store.dispatch(
      fromActions.searchFilterUrlaubstage({
        tage: this.urlaubControl.value,
      })
    );
  }
}
