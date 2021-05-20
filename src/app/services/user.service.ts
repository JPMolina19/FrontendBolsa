import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { User } from '../models/user';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(
    public http: HttpClient,
    private token: TokenService
  ) {
    this.url = GLOBAL.url;
  }

  login(user: User): Observable<any> {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'auth/login', json, {headers});
  }

  userData(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.getToken()).set('Content-Type', 'application/json');
    return this.http.get(this.url + 'auth/user', {headers});
  }

}
