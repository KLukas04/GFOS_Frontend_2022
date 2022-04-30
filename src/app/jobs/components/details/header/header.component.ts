import { Component, Input, OnInit } from '@angular/core';
import { faMoneyBill, faFlag } from '@fortawesome/free-solid-svg-icons';
import { Adresse } from 'src/app/jobs/models/adresse.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public moneyBill = faMoneyBill;
  public flag = faFlag;

  @Input() adresse: Adresse | undefined;
  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() wage: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
