import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CarreraService} from "../../services/carrera.service";
import {Carrera} from "../../models/carrera";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carreras: Array<Carrera> = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private token: TokenService,
    private carreraService: CarreraService,
  ) { }

  ngOnInit(): void {
    this.carreraService.obtenerCarreras().subscribe(
      response => {
        this.carreras = response;
      }, error => {
        if (error.status === 401) {
          this.token.removeToken();
          this.auth.changeStatus(false);
          this.router.navigateByUrl('/login').then();
        } else {
          console.log(error);
          alert('Ocurrió un error, intente mas tarde');
        }
      }
    );
  }

}
