import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TuiPdfViewerService, TuiPdfViewerOptions } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { getOrElse, RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/employer/models/applicant.model';
import { Interesse } from 'src/app/employer/models/interesse.model';
import { LebenslaufStation } from 'src/app/employer/models/lebenslaufstation.model';
import { Message } from 'src/app/employer/models/message.model';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
import * as fromSelectors from '../../../store/employer.selectors';
@Component({
  selector: 'app-applicant-detail-view',
  templateUrl: './applicant-detail-view.component.html',
  styleUrls: ['./applicant-detail-view.component.scss'],
})
export class ApplicantDetailViewComponent implements OnInit {
  public messageControl: FormControl = new FormControl(null);

  public cvPdf: string | undefined;
  public letterPdf: string | undefined;

  public image$: Observable<RemoteData<string, HttpErrorResponse>>;

  public applicant$: Observable<RemoteData<Applicant, HttpErrorResponse>>;
  public interests$: Observable<RemoteData<Interesse[], HttpErrorResponse>>;

  public messages$: Observable<RemoteData<Message[], HttpErrorResponse>>;

  public stations$: Observable<
    RemoteData<LebenslaufStation[], HttpErrorResponse>
  >;

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService)
    private readonly pdfService: TuiPdfViewerService,
    private store: Store<fromReducer.EmployerState>
  ) {
    this.image$ = this.store.select(fromSelectors.selectDetailsImage);
    this.store.select(fromSelectors.selectDetailsCv).subscribe((pdf) => {
      this.cvPdf = getOrElse(pdf, '');
    });
    this.store.select(fromSelectors.selectDetailsLetter).subscribe((pdf) => {
      this.letterPdf = getOrElse(pdf, '');
    });

    this.applicant$ = this.store.select(fromSelectors.selectDetailsApplicant);
    this.interests$ = this.store.select(fromSelectors.selectDetailsInterest);

    this.messages$ = this.store.select(fromSelectors.selectDetailsMessages);

    this.stations$ = this.store.select(fromSelectors.selectDetailsStations);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadApplicationDetailsImage());
    this.store.dispatch(fromActions.loadApplicationDetailsCvPdf());
    this.store.dispatch(fromActions.loadApplicationDetailsLetterPdf());

    this.store.dispatch(fromActions.loadApplicationDetailsApplicant());
    this.store.dispatch(fromActions.loadApplicationDetailsInterests());

    this.store.dispatch(fromActions.loadApplicationDetailsMessages());

    this.store.dispatch(fromActions.loadApplicationDetailsStations());
  }

  getDateFormat(startI: string, endI: string): string {
    const start = new Date(startI);
    const end = new Date(endI);

    const difference = end.getTime() - start.getTime();
    const days = difference / (1000 * 3600 * 24);

    return days > 365 ? 'YYYY' : 'longDate';
  }

  public messageInsert(): void {
    this.store.dispatch(
      fromActions.applicationDetailsNewMessageInserted({
        message: this.messageControl.value,
      })
    );
  }

  public sendMessage(): void {
    this.store.dispatch(fromActions.applicationDetailsNewMessageSent());
    this.messageControl.reset();
  }

  public show(
    actions: PolymorpheusContent<TuiPdfViewerOptions>,
    titel: string
  ) {
    let fileToShow: string | undefined;
    titel === 'Lebenslauf'
      ? (fileToShow = this.cvPdf)
      : (fileToShow = this.letterPdf);
    this.pdfService
      .open(this.sanitizer.bypassSecurityTrustResourceUrl(fileToShow ?? ''), {
        label: titel,
        actions,
      })
      .subscribe();
  }

  public showPdfReferenz(
    actions: PolymorpheusContent<TuiPdfViewerOptions>,
    titel: string,
    pdf: string
  ) {
    this.pdfService
      .open(this.sanitizer.bypassSecurityTrustResourceUrl(pdf), {
        label: titel,
        actions,
      })
      .subscribe();
  }
}
