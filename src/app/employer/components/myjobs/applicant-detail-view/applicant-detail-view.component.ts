import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-detail-view',
  templateUrl: './applicant-detail-view.component.html',
  styleUrls: ['./applicant-detail-view.component.scss']
})
export class ApplicantDetailViewComponent implements OnInit {

  newInterest = '';
  interests = ["Tennis", "Klaviesdfddr", "Klavier", "Klavier", "Klavier", "Klavier", "Klavier"];
  open = false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
