import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-job-card',
  templateUrl: './trend-job-card.component.html',
  styleUrls: ['./trend-job-card.component.scss'],
})
export class TrendJobCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() fachgebiet: number = 0;
  @Input() kurzbeschreibung: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchIcon(id: number): string {
    switch (id) {
      case 0:
        return 'assets/fachgebiete/coding.png';
      case 1:
        return 'assets/fachgebiete/cyber-security.png';
      case 2:
        return 'assets/fachgebiete/social-growth.png';
      case 3:
        return 'assets/fachgebiete/motivation.png';
      case 4:
        return 'assets/fachgebiete/budget.png';
      case 5:
        return 'assets/fachgebiete/support.png';
      case 6:
        return 'assets/fachgebiete/acquisition.png';
      case 7:
        return 'assets/fachgebiete/technician.png';
      case 8:
        return 'assets/fachgebiete/conveyor-belt.png';
      case 9:
        return 'assets/fachgebiete/shopping-cart.png';

      default:
        return '';
    }
  }
}
