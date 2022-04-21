import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private storageProvider: Storage;

  constructor() {
    if (this.sessionStorageAvailable()) {
      this.storageProvider = sessionStorage;
    } else if (this.localStorageAvailable()) {
      this.storageProvider = localStorage;
    } else {
      throw new Error(
        'Kein Storage Provider verfügbar! Keine Tokenspeicherung möglich!'
      );
    }
  }

  private localStorageAvailable(): boolean {
    const test = '__localStorageTest___';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private sessionStorageAvailable(): boolean {
    const test = '__sessionStorageTest___';

    try {
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  public saveToken(token: string): void {
    this.storageProvider.setItem('token', token);
  }

  public getToken(): string | null {
    return this.storageProvider.getItem('token');
  }

  public clearToken(): void {
    this.storageProvider.removeItem('token');
  }
}
