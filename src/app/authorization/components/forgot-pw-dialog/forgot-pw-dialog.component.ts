import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-forgot-pw-dialog',
  templateUrl: './forgot-pw-dialog.component.html',
  styleUrls: ['./forgot-pw-dialog.component.scss']
})
export class ForgotPwDialogComponent implements OnInit {

  constructor( @Inject(POLYMORPHEUS_CONTEXT)
  private readonly context: TuiDialogContext<any>,) { }

  ngOnInit(): void {
  }

  close(): void {
    this.context.completeWith(null);
  }
}
