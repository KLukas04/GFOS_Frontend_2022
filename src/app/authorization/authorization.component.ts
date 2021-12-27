import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  public faUser = faUser;
  public faLock = faLock;
  public faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}

  changeToSignUp(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.add('sign-up-mode');
  }

  changeToSignIn(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.remove('sign-up-mode');
  }
}
