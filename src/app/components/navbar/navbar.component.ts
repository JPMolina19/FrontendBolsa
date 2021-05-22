import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean | undefined;
  public user: User | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) {
    auth.authStatus.subscribe(value => this.loggedIn = value);
    auth.userStatus.subscribe(value => this.user = value);
  }

  ngOnInit(): void {
  }

  logOut(event: MouseEvent): void {
    event.preventDefault();
    this.token.removeToken();
    this.auth.changeStatus(false);
    this.router.navigateByUrl('/login').then(
      () => window.location.reload()
    );
  }

}
