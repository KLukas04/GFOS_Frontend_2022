import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public moneyBill = faMoneyBill;
  public flag = faFlag;

  constructor() { }

  ngOnInit(): void {
  }

}
