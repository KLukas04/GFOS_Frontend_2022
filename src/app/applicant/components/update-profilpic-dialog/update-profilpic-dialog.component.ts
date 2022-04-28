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

@Component({
  selector: 'app-update-profilpic-dialog',
  templateUrl: './update-profilpic-dialog.component.html',
  styleUrls: ['./update-profilpic-dialog.component.scss'],
})
export class UpdateProfilpicDialogComponent implements OnInit {
  public picControl: FormControl = new FormControl(null);
  private base64: any = '';

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>,
    private store: Store<fromReducer.ApplicantState>
  ) {}

  ngOnInit(): void {}

  public loadPic(event: any): void {
    const fileReader = new FileReader();
    const bild = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsDataURL(bild);
      fileReader.onload = () => {
        this.base64 = fileReader.result;
      };
    }
  }

  public close(): void {
    this.store.dispatch(
      fromActions.uploadNewProfilePic({ base64: this.base64 })
    );
    this.context.completeWith(null);
  }
}
