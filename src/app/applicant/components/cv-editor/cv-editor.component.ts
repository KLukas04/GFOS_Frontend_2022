import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent {

  public avatar: string = 'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  newInterest = '';
  interests = ["Tennis", "Klavier"];
  open = false;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
) {}

  showDialog() {
    this.open = true;
    this.interests.push(this.newInterest)
  }
}
