import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TuiPdfViewerService, TuiPdfViewerOptions } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { getOrElse, RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
import * as fromSelectors from '../../../store/employer.selectors';
@Component({
  selector: 'app-applicant-detail-view',
  templateUrl: './applicant-detail-view.component.html',
  styleUrls: ['./applicant-detail-view.component.scss'],
})
export class ApplicantDetailViewComponent implements OnInit {
  public cvPdf: string | undefined;

  newInterest = '';
  interests = [
    'Tennis',
    'Klaviesdfddr',
    'Klavier',
    'Klavier',
    'Klavier',
    'Klavier',
    'Klavier',
  ];
  stations: Meilenstein[] = [
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
    { year: 2015, content: 'Hallo' },
  ];

  public image$: Observable<RemoteData<string, HttpErrorResponse>>;

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
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadApplicationDetailsImage());
    this.store.dispatch(fromActions.loadApplicationDetailsCvPdf());
  }

  show(actions: PolymorpheusContent<TuiPdfViewerOptions>, titel: string) {
    let fileToShow: string | undefined;
    titel === 'Lebenslauf' ? (fileToShow = this.cvPdf) : null;
    this.pdfService
      .open(this.sanitizer.bypassSecurityTrustResourceUrl(fileToShow ?? ''), {
        label: titel,
        actions,
      })
      .subscribe();
  }
}

interface Meilenstein {
  year: number;
  content: string;
}
