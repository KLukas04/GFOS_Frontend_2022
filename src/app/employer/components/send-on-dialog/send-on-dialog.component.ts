import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext  } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];

@Component({
  selector: 'app-send-on-dialog',
  templateUrl: './send-on-dialog.component.html',
  styleUrls: ['./send-on-dialog.component.scss']
})
export class SendOnDialogComponent implements OnInit {

  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<any>,) { }

  ngOnInit(): void {
  }

  search: string | null = '';
 
  readonly control = new FormControl([ITEMS[0]]);

  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }

  close(): void {
    this.context.completeWith(null);
  }
}
