import { Component, Input, OnInit } from '@angular/core';
import { TuiStatusT } from '@taiga-ui/kit';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {
   @Input() title: string = '';
   @Input() info: TuiStatusT = 'info';
   @Input() status: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
