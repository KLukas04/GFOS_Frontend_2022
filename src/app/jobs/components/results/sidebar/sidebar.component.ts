import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromActions from '../../../store/jobs.actions';
import * as fromReducer from '../../../store/jobs.reducer';
import * as fromRouter from '../../../../store/router.selectors';
import { TUI_INPUT_MONTH_PROVIDERS } from '@taiga-ui/kit';
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
  mockYearlyIncome: string[] = ['20000', '30000', '40000', '50000', '60000'];

  holidays: string[] = [
    '30 Tage',
    '32 Tage',
    '34 Tage',
    '36 Tage',
    '38 Tage',
    '40 Tage',
  ];

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

  constructor(private store: Store<fromReducer.JobsState>) {
    this.store.select(fromRouter.selectQueryParams).subscribe((params) => {
      if (params['fachgebiet']) {
        this.fachgebietControl.setValue(params['fachgebiet']);
        this.saveFachgebiet();
      }

      if (params['typ']) {
        this.typeControl.setValue(params['typ']);
        this.saveType();
      }

      if (Object.keys(params).length !== 0) {
        this.search();
      }
    });
  }

  ngOnInit(): void {}

  public saveFachgebiet(): void {
    this.store.dispatch(
      fromActions.searchFilterFachgebiet({
        fachgebiet: this.fachgebietControl.value,
      })
    );
  }

  public saveType(): void {
    this.store.dispatch(
      fromActions.searchFilterType({
        typ: this.typeControl.value,
      })
    );
  }

  public saveRemote(): void {
    this.store.dispatch(
      fromActions.searchFilterRemote({
        remote: this.remoteControl.value,
      })
    );
  }

  public saveBefristet(): void {
    this.store.dispatch(
      fromActions.searchFilterBefristet({
        befristet: this.befristetControl.value,
      })
    );
  }

  public saveGehalt(): void {
    this.store.dispatch(
      fromActions.searchFilterGehalt({
        gehalt: this.gehaltControl.value,
      })
    );
  }

  public saveUrlaub(): void {
    this.store.dispatch(
      fromActions.searchFilterUrlaubstage({
        tage: this.urlaubControl.value,
      })
    );
  }

  public search(): void {
    this.store.dispatch(fromActions.startSearch());
  }
}
