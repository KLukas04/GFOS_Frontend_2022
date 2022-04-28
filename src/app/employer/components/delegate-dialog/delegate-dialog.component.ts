import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext  } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-delegate-dialog',
  templateUrl: './delegate-dialog.component.html',
  styleUrls: ['./delegate-dialog.component.scss']
})
export class DelegateDialogComponent implements OnInit {

  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<any>,) { }

  ngOnInit(): void {
  }
  close(): void {
    this.context.completeWith(null);
  }
}
