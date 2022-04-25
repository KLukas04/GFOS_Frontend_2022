import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
 

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  istChef = true;

  constructor() { }

  ngOnInit(): void {
  }

  mockExpertiseAreas: Object[] = [
    {
      text: 'Softwareentwicklung',
      icon: 'https://www.flaticon.com/premium-icon/coding_2704022?term=software%20development&page=1&position=13&page=1&position=13&related_id=2704022&origin=search'
    },

    {
      text: 'IT-Sicherheit',
      icon: 'https://www.flaticon.com/free-icon/cyber-security_3479897?term=it%20security&page=1&position=6&page=1&position=6&related_id=3479897&origin=search'
    },

    {
      text: 'Marketing',
      icon: 'https://www.flaticon.com/free-icon/social-growth_3601371?term=marekting&page=1&position=1&page=1&position=1&related_id=3601371&origin=search'
    },
    {
      text: 'Human Ressources',
      icon: 'https://www.flaticon.com/premium-icon/motivation_3886739?term=human%20ressources&page=1&position=3&page=1&position=3&related_id=3886739&origin=search'
    },
    {
      text: 'Buchhaltung',
      icon: 'https://www.flaticon.com/premium-icon/budget_781902?term=finance&page=1&position=1&page=1&position=1&related_id=781902&origin=search'
    },
    {
      text: 'Kundendienst ',
      icon: 'https://www.flaticon.com/free-icon/support_1067566?term=customer%20service&page=1&position=1&page=1&position=1&related_id=1067566&origin=search'
    },
    {
      text: 'Vertrieb',
      icon: 'https://www.flaticon.com/premium-icon/acquisition_3211590?term=sales&page=1&position=3&page=1&position=3&related_id=3211590&origin=search'
    },
    {
      text: 'Techniker',
      icon: 'https://www.flaticon.com/premium-icon/technician_2471097?term=technician&page=1&position=3&page=1&position=3&related_id=2471097&origin=search'
    },
    {
      text: 'Produktion',
      icon: 'https://www.flaticon.com/free-icon/conveyor-belt_4003707?term=production&related_id=4003707'
    },
    {
      text: 'Einkauf',
      icon: 'https://www.flaticon.com/free-icon/shopping-cart_263142?related_id=263142'
    },
  ];

  inputForm = new FormGroup({
    abteilung: new FormControl(null)
});

}
