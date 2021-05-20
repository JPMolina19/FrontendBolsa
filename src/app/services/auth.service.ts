import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenService} from './token.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean> (this.token.isValid());
  private currentUser = new BehaviorSubject<User>(this.token.getUser());
  public authStatus = this.loggedIn.asObservable();
  public userStatus = this.currentUser.asObservable();

  constructor(
    private token: TokenService
  ) { }

  changeUser(user: User) {
    this.currentUser.next(user);
  }
  changeStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}
