import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
  public mockTypesOfEmployment: string[] = [
    'Teilzeit',
    'Vollzeit',
    'Praktikum',
    'Ausbildung',
    'Duales Studium',
    'Minijob',
    'Werkstudent',
  ];

  public mockExpertiseAreas: string[] = [
    'Softwareentwicklung',
    'IT-Sicherheit',
    'Marketing',
    'Human Ressources',
    'Buchhaltung',
    'Kundendienst ',
    'Vertrieb',
    'Techniker',
    'Produktion',
    'Einkauf',
  ];

  public titleControl: FormControl = new FormControl(null);
  public typeControl: FormControl = new FormControl(null);
  public sectionControl: FormControl = new FormControl(null);
  public deadlineControl: FormControl = new FormControl(null);
  public startDateControl: FormControl = new FormControl(null);
  public temporaryControl: FormControl = new FormControl(null);
  public endControl: FormControl = new FormControl(null);

  public streetControl: FormControl = new FormControl(null);
  public numberControl: FormControl = new FormControl(null);
  public plzControl: FormControl = new FormControl(null);
  public townControl: FormControl = new FormControl(null);
  public countryControl: FormControl = new FormControl(null);

  public shortDescriptionControl: FormControl = new FormControl(null);
  public descriptionControl: FormControl = new FormControl(null);

  public vacationControl: FormControl = new FormControl(null);
  public remoteControl: FormControl = new FormControl(null);
  public wageMonthControl: FormControl = new FormControl(null);
  public wageYearControl: FormControl = new FormControl(null);
  public advantagesControl: FormControl = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}
}
