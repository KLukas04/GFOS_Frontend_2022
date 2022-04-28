import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list-item',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.scss'],
})
export class ApplicationListItemComponent implements OnInit {
  @Input() title = '';
  @Input() typ = '';
  @Input() startDate: Date | undefined;
  @Input() description = '';
  @Input() alreadyApplied = true;
  @Input() status = 0;
  constructor() {}

  ngOnInit(): void {}

  statusToString(): string {
    if (this.status === 0) {
      return 'Abgeschickt';
    } else if (this.status === 1) {
      return 'In Bearbeitung';
    } else if (this.status === 2) {
      return 'Abgelehnt';
    } else if (this.status === 3) {
      return 'Angenommen';
    }

    return 'Fehler';
  }

  deleteApplication() {
    //TODO: Link zu Job Detail View verhindern
    console.log('Delete');
  }
}
