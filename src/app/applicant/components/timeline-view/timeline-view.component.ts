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
  year = '';
  open = false;

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
) {}

  showDialog() {
    this.open = true;
  }
}

interface Meilenstein {
  year: number;
  content: string;
}