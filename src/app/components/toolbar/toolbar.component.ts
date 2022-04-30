import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Observable } from 'rxjs';

import * as fromReducer from '../../authorization/store/authorization.reducer';
import * as fromSelectors from '../../authorization/store/authorization.selectors';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';

  @ViewChild(TuiHostedDropdownComponent)
  dropComponent?: TuiHostedDropdownComponent;

  public open: boolean = false;

  public defaultRoute$: Observable<string>;

  constructor(private store: Store<fromReducer.AuthorizationState> ,private logoutService: LogoutService) {
    this.defaultRoute$ = this.store.select(fromSelectors.selectDefaultRoute);
  }

  getDefaultRoute(): string {
    return localStorage.getItem('defaultRoute') ?? 'jobs';
  }

  logout(): void {
    this.open = false;
    if (this.dropComponent && this.dropComponent.nativeFocusableElement) {
      this.dropComponent.nativeFocusableElement.focus();
    }
    this.logoutService.logout().subscribe();
  }
}
