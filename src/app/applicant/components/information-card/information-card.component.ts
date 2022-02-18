import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {
  @Input() message: string = '';
  @Input() status: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
