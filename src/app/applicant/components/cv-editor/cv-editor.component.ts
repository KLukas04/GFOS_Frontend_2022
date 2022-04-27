import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';

import { TuiDialogService } from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import { InterestDialogComponent } from '../interest-dialog/interest-dialog.component';



@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss'],
})

export class CvEditorComponent implements OnInit {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  newInterest = '';
  interests = ['Tennis', 'Klavier'];

  private readonly verifyDialog = this.dialogService.open(
    new PolymorpheusComponent(InterestDialogComponent, this.injector),
    {
      dismissible: false,
      label: 'Neues Interesse',
    }
  );
  constructor(
    private store: Store<fromReducer.ApplicantState>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLebenslaufStationen());
  }

  showInterestDialog(){
    this.verifyDialog.subscribe();
  }
}
