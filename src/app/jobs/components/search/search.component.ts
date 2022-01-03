import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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

  typeFormControl: FormControl = new FormControl(null);
  distanceFormControl: FormControl = new FormControl(null);
  expertiseFormControl: FormControl = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}
}
