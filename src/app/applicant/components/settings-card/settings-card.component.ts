import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';
import * as fromSelectors from '../../store/applicant.selectors';
import { Settings } from '../../models/settings.model';
import { getOrElse } from 'ngx-remotedata';
@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsCardComponent implements OnInit {
  public mailControl: FormControl = new FormControl(null);
  public twofaControl: FormControl = new FormControl(null);

  constructor(private store: Store<fromReducer.ApplicantState>) {
    this.store.select(fromSelectors.selectOwnSettings).subscribe((settings) => {
      const rawSettings: Settings | null = getOrElse(settings, null);

      this.mailControl.setValue(rawSettings?.getmails);
      this.twofaControl.setValue(rawSettings?.twofa);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadOwnSettings());
  }
}
