import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';
import {TokenService} from '../../services/token.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public form = {
    username: '',
    password: ''
  };
  public user: User;
  public error: string | undefined;

  constructor(
    private service: UserService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
  ) {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.login(new User(this.form.username, this.form.password, '')).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  private handleResponse(data: any): void {
    this.token.handleToken(data.access_token);
    this.auth.changeStatus(true);
    this.service.userData().subscribe(
      response => {
        this.token.handleUser(response);
        this.auth.changeUser(this.token.getUser());
      }
    );
    this.router.navigateByUrl('/carreras').then();
  }

  private handleError(error: any): void {
    this.error = error.error.mensaje;
  }
}
