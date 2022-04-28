import { ChangeDetectionStrategy, Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

import { TuiDialogService } from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import { DelegateDialogComponent } from '../delegate-dialog/delegate-dialog.component';
import { SendOnDialogComponent } from '../send-on-dialog/send-on-dialog.component';


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

  private readonly sendOnDialog = this.dialogService.open(
    new PolymorpheusComponent(SendOnDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Weiterleiten',
    }
  );

  private readonly delegateDialog = this.dialogService.open(
    new PolymorpheusComponent(DelegateDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Delegieren',
    }
  );

  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  @Inject(Injector) private readonly injector: Injector) { }

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

  showSendOnDialog(){
    this.sendOnDialog.subscribe();
  }

  showDelegateDialog(){
    this.delegateDialog.subscribe();
  }

}
