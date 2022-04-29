import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';
import { HostListener } from "@angular/core";

import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  public carouselIndex = 0;
  public numberOfItems = 1;

  screenHeight: number = 0;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if(this.screenWidth < 650){
            this.numberOfItems = 1;
          }else if(this.screenWidth < 1020){
            this.numberOfItems = 2;
          } else if(this.screenWidth < 1400){
            this.numberOfItems = 3;
          } else{
            this.numberOfItems = 4;
          }
    }

  public trendJobs$: Observable<RemoteData<Job[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.getScreenSize();
    this.trendJobs$ = this.store.select(fromSelectors.selectTrendJobs);
  }

  

  ngOnInit(): void {}
}
