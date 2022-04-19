import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';


@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineViewComponent {

  value = '';
  open = false;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
) {}

  showDialog() {
    console.log("Hello");
      /*this.dialogService
          .open('This is a plain string dialog', {label: 'Heading', size: 's'})
          .subscribe();*/
          this.open = true;
  }
}
