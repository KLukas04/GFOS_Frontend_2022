import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-detail-view',
  templateUrl: './applicant-detail-view.component.html',
  styleUrls: ['./applicant-detail-view.component.scss']
})
export class ApplicantDetailViewComponent implements OnInit {

  newInterest = '';
  interests = ["Tennis", "Klaviesdfddr", "Klavier", "Klavier", "Klavier", "Klavier", "Klavier"];
  stations: Meilenstein[] = [
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
    {year: 2015, content: "Hallo"},
   ]
 

  
  constructor() { }

  ngOnInit(): void {
  }

}

interface Meilenstein {
  year: number;
  content: string;
}