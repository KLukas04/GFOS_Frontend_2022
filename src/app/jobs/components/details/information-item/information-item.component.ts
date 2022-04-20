import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-item',
  templateUrl: './information-item.component.html',
  styleUrls: ['./information-item.component.scss']
})
export class InformationItemComponent implements OnInit {

  @Input() title = "";
  @Input() value = "";
  constructor() { }

  ngOnInit(): void {
  }

}
