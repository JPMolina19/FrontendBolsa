import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  public url: string;

  constructor(
    public http: HttpClient,
    private token: TokenService
  ) {
    this.url = GLOBAL.url;
  }

  obtenerCarreras(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.getToken()).set('Content-Type', 'application/json');
    return this.http.get(this.url + 'carrera', {headers});
  }

}
