import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';

import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { CvDialogComponent } from '../cv-dialog/cv-dialog.component';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineViewComponent {

  private readonly cvDialog = this.dialogService.open(
    new PolymorpheusComponent(CvDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Lebenslaufstation',
    }
  );

  value = '';
  year = '';

  stations: Meilenstein[] = [
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
   {year: 2015, content: "Hallo"},
  ]

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
) {}

showCVDialog() {
  console.log("Hello");
  this.cvDialog.subscribe();
}
}

interface Meilenstein {
  year: number;
  content: string;
}