import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list-item',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.scss']
})
export class ApplicationListItemComponent implements OnInit {

@Input() title = "";
@Input() typ = "";
@Input() startDate = "";
@Input() description = "";
@Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
