import { Component, Input, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  @Input() title = "";
  @Input() typ = "";
  @Input() startDate = "";
  @Input() description = "";
    constructor() { }
  
    ngOnInit(): void {
    }
    angepinnt: FormControl = new FormControl(true);
  }
