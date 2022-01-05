import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  public carouselIndex = 0;
  public numberOfItems = 4;

  constructor() {}

  ngOnInit(): void {}

  navigate(change: number): void {
    this.carouselIndex = (this.carouselIndex + change) % this.numberOfItems;
    console.log(this.carouselIndex);
  }
}
