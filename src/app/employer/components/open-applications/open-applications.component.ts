import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss']
})
export class OpenApplicationsComponent implements OnInit {

  public avatar: string = 'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  @Input() job ="";
  @Input() name = "";
  @Input() beworbenAm = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
