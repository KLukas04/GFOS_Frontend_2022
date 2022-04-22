import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TuiPdfViewerOptions, TuiPdfViewerService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationCardComponent implements OnInit {

  @Input() name = "";
  @Input() fachgebiet = "";
  @Input() beworbenAm = "";
  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
  ) { }

  ngOnInit(): void {
  }

  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {
    console.log("HI");
    this.pdfService
      .open(
        this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Lebenslauf.svg'),
        {
          label: 'Taiga UI',
          actions,
        },
      )
  }
}
