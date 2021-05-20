import {Injectable} from '@angular/core';
import {GLOBAL} from './global';
import {User} from '../models/user';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public url: string;
  protected readonly CRYPTO_KEY = 'crypto_key_SIF';
  protected readonly USER_KEY = 'user';
  protected readonly SUCURSAL_KEY = 'suc';
  protected readonly TOKEN_KEY = 'token';

  constructor() {
    this.url = GLOBAL.url;
  }

  handleToken(token): void {
    this.setToken(token);
  }

  handleUser(user: User): void {
    const a = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(user)), this.CRYPTO_KEY).toString();
    localStorage.setItem(this.USER_KEY, a);
  }

  getUser(): User {
    const aux = localStorage.getItem(this.USER_KEY);
    if (aux) {
      const a = CryptoJS.AES.decrypt(aux, this.CRYPTO_KEY);
      return JSON.parse(a.toString(CryptoJS.enc.Utf8));
    }
    return new User('', '', '', '');
  }

  setToken(token): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.clear();
  }

  isValid(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === (this.url + 'auth/login');
      }

    }
  }

  private payload(token: string): any {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any): string {
    return JSON.parse(atob(payload));
  }
}
