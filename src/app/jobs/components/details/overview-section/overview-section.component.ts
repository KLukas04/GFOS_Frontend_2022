import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.scss'],
})
export class OverviewSectionComponent implements OnInit {
  @Input() beschreibung: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
