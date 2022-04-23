import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
 

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abteilungen = ["Marketing", "Design", "Software Development"]
  ebenen = ["1", "2", "3"]
  inputForm = new FormGroup({
    abteilung: new FormControl(),
    ebene: new FormControl()
});

}
