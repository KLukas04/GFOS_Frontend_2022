import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenApplicationsComponent implements OnInit {

  @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;
  open = false;

  public avatar: string = 'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  @Input() job = "";
  @Input() name = "";
  @Input() beworbenAm = "";

  status = 0;
  //0 = noch nicht gesehen
  //1 = in bearbeitung
  //2 = abgelehnt
  //3 = angenommen

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.open = false;

    if (this.component && this.component.nativeFocusableElement) {
      this.component.nativeFocusableElement.focus();
    }
  }

  setStatusInWork(){
    this.status = 1; //bei ersten Click auf Bewerbung status auf "in bearbeitung"
  }

  acceptApplication(){
    this.status = 3;
  }

  declineApplication(){
    this.status = 2;
  }


}
