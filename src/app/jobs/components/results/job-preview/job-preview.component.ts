import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-preview',
  templateUrl: './job-preview.component.html',
  styleUrls: ['./job-preview.component.scss']
})
export class JobPreviewComponent implements OnInit {

  @Input() title = ""; //
  @Input() fachgebiet = "";//
  @Input() typ = "";//
  @Input() remote = false; //
  @Input() befristet = false; //
  @Input() jahregehalt = ""; //
  @Input() address = "";
  @Input() holidays = "";
  @Input() description = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    remote: new FormControl(true),
    befristet: new FormControl(false)
  });
}
