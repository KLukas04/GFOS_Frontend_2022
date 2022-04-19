import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  testForm = new FormGroup({
    publicProfil: new FormControl(true),
    jobOffers: new FormControl(false),
    twoFA: new FormControl(true),
});
}
