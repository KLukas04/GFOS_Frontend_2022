import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { FormControl } from '@angular/forms';
import { tuiPure } from '@taiga-ui/cdk';
import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, of, timer } from 'rxjs';
import { map, mapTo, share, startWith, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromActions from '../../store/applicant.actions';
import * as fromReducer from '../../store/applicant.reducer';

class RejectedFile {
  constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function convertRejected({ file, reason }: RejectedFile): TuiFileLike {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    content: reason,
  };
}

@Component({
  selector: 'app-cv-dialog',
  templateUrl: './cv-dialog.component.html',
  styleUrls: ['./cv-dialog.component.scss'],
})
export class CvDialogComponent implements OnInit {
  public dateControl: FormControl;
  public stationControl: FormControl;

  readonly control = new FormControl();
  private newFileBase64: any = '';

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>,
    private store: Store<fromReducer.ApplicantState>
  ) {
    this.dateControl = new FormControl(null);
    this.stationControl = new FormControl(null);
  }

  ngOnInit(): void {}

  public saveDates(): void {
    setTimeout(() => {
      this.store.dispatch(
        fromActions.newLebenslaufStationStartEnd({
          date: this.dateControl.value,
        })
      );
    }, 1000);
  }

  public saveStation(): void {
    this.saveDates();
    this.store.dispatch(
      fromActions.newLebenslaufStationInfo({ info: this.stationControl.value })
    );
  }

  public loadNewPdf(event: any): void {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.newFileBase64 = fileReader.result;

        this.store.dispatch(
          fromActions.newLebenslaufStationReferenz({
            referenz: this.newFileBase64,
          })
        );
      };
    }
  }

  close(): void {
    this.store.dispatch(fromActions.newLebenslaufStationAdd());
    this.context.completeWith(null);
  }
}
