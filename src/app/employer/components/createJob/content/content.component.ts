import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testForm = new FormGroup({
    isRemote: new FormControl(true),
    befristet: new FormControl(false),
});

}
