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
    console.log(this.dateControl.value);
    setTimeout(() => {
      this.store.dispatch(
        fromActions.newLebenslaufStationStartEnd({
          date: this.dateControl.value,
        })
      );
    }, 2000);
  }

  public saveStation(): void {
    this.store.dispatch(
      fromActions.newLebenslaufStationInfo({ info: this.stationControl.value })
    );
  }

  close(): void {
    this.context.completeWith(null);
  }

  readonly control = new FormControl();

  @tuiPure
  get loading$(): Observable<readonly File[]> {
    return this.requests$.pipe(
      map((file) => (file instanceof File ? [file] : [])),
      startWith([])
    );
  }

  @tuiPure
  get rejected$(): Observable<readonly TuiFileLike[]> {
    return this.requests$.pipe(
      map((file) =>
        file instanceof RejectedFile ? [convertRejected(file)] : []
      ),
      tap(({ length }) => {
        if (length) {
          this.control.setValue(null);
        }
      }),
      startWith([])
    );
  }

  @tuiPure
  private get requests$(): Observable<RejectedFile | File | null> {
    return this.control.valueChanges.pipe(
      switchMap((file) =>
        file ? this.serverRequest(file).pipe(startWith(file)) : of(null)
      ),
      share()
    );
  }

  private serverRequest(file: File): Observable<RejectedFile | File | null> {
    const delay = Math.round(Math.random() * 5000 + 500);
    const result =
      delay % 2
        ? null
        : new RejectedFile(file, 'Server responded for odd number of time');

    return timer(delay).pipe(mapTo(result));
  }
}
