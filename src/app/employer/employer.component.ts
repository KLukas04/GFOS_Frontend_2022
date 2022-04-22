import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  testForm = new FormGroup({
    finished: new FormControl(true),
});
}
