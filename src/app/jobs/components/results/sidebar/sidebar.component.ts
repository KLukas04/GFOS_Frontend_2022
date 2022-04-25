import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mockTypesOfEmployment: string[] = [
    'Teilzeit',
    'Vollzeit',
    'Praktikum',
    'Ausbildung',
    'Duales Studium',
    'Minijob',
  ];

  mockDistances: string[] = [
    '5 km',
    '10 km',
    '15 km',
    '20 km',
    '30 km',
    '40 km',
    '50 km',
  ];

  mockYearlyIncome: string[] = [
    "20000 €",
    "30000 €",
    "40000 €",
    "50000 €",
    "60000 €",

  ];

  holidays: string[] = [
    "30 Tage",
    "32 Tage",
    "34 Tage",
  ];
  mockExpertiseAreas: Object[] = [
    {
      text: 'Informatik',
    },

    {
      text: 'Mathematik',
    },

    {
      text: 'Buchhaltung',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filterForm = new FormGroup({
    typeFormControl: new FormControl(null),
    distanceFormControl: new FormControl(null),
    expertiseFormControl: new FormControl(null),
    remote: new FormControl(false),
    befristet: new FormControl(false),
    yearlIncome: new FormControl(null),
    holidays: new FormControl(null),
  });
}
