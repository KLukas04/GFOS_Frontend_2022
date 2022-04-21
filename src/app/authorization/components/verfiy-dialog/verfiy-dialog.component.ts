import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-verfiy-dialog',
  templateUrl: './verfiy-dialog.component.html',
  styleUrls: ['./verfiy-dialog.component.scss'],
})
export class VerfiyDialogComponent implements OnInit {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.context.completeWith(null);
  }
}
