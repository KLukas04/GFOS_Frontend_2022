import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-job-card',
  templateUrl: './trend-job-card.component.html',
  styleUrls: ['./trend-job-card.component.scss'],
})
export class TrendJobCardComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
