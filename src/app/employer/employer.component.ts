import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
})
export class EmployerComponent implements OnInit {
  public axisXLabels: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  public axisYLabels: string[] = [
    '50',
    '100',
    '150',
    '200'
  ];

  public readonly value: readonly (readonly [number, number])[] = [
        [0, 50],
        [1, 75],
        [2, 50],
        [3, 150],
        [4, 155],
        [5, 190],
        [6, 90],
        [7, 50],
        [8, 150],
        [9, 155],
        [10, 190],
        [11, 90],
    ];

  public todos: string[] = [
    'Jan Thomas feuern',
    'Lukas Krinke Bewerbung lesen',
    'Simon Engel antworten',
    'Friedrich Böttger anrufen',
    'Henrik Bokies zum System hinzufügen',
    'Felix Carls Termin finden'
  ];

  constructor() {}

  ngOnInit(): void {}
}
