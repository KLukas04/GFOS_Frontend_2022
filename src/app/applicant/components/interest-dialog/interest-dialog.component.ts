import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDialogContext, TUI_HINT_OPTIONS } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-interest-dialog',
  templateUrl: './interest-dialog.component.html',
  styleUrls: ['./interest-dialog.component.scss']
})
export class InterestDialogComponent implements OnInit {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  close(): void {
    this.context.completeWith(null);
  }
}
