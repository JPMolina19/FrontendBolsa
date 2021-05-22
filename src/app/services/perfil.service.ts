import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public url: string;

  constructor(
    public http: HttpClient,
    private token: TokenService
  ) {
    this.url = GLOBAL.url;
  }

  getGraduados(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.getToken()).set('Content-Type', 'application/json');
    return this.http.get(this.url + 'candidatos/graduados/' + id, {headers});
  }

  getAlumnos(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.getToken()).set('Content-Type', 'application/json');
    return this.http.get(this.url + 'candidatos/alumnos/' + id, {headers});
  }

}
