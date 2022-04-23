import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss']
})
export class OpenApplicationsComponent implements OnInit {

  @Input() job ="";
  @Input() name = "";
  @Input() beworbenAm = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
