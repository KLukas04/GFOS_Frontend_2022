import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: string = '';
  @Input() link: string = '';
  @Input() img: string = '';
  constructor() {}

  ngOnInit(): void {}
}
