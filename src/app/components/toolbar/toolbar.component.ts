import { Component, OnInit, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';

  @ViewChild(TuiHostedDropdownComponent)
  dropComponent?: TuiHostedDropdownComponent;

  public open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  //TODO: Je nach dem ob es ein Berwerber oder Personaler ist. 
  // Nötig das Home Link zur richtigen Route führt
  typ = "false";

  logout(): void {
    this.open = false;
    if (this.dropComponent && this.dropComponent.nativeFocusableElement) {
      this.dropComponent.nativeFocusableElement.focus();
    }
  }
}
