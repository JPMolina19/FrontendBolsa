import { Component, OnInit } from '@angular/core';
import {Graduado} from "../../models/graduado";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {FormBuilder} from "@angular/forms";
import {PerfilService} from "../../services/perfil.service";
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GraduadoViewComponent} from "../graduado-view/graduado-view.component";

@Component({
  selector: 'app-listado-graduado',
  templateUrl: './listado-graduado.component.html',
  styleUrls: ['./listado-graduado.component.css']
})
export class ListadoGraduadoComponent implements OnInit {

  public title: string;
  public graduado: Array<Graduado>;
  public filGraduado: Array<Graduado> ;
  public total: number;
  public page = 1;
  public itemsPerPage = 10;
  public query = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private auth: AuthService,
    private token: TokenService,
    private formBuilder: FormBuilder,
    private graduadoService: PerfilService,
  ) {
    this.title = 'Lista Graduados';
    this.filGraduado =[];
    this.graduado = [];
    this.total = 0
  }

  ngOnInit(): void {
    this.graduadoService.getGraduados().subscribe(
      response => {
        this.graduado = response;
        this.filGraduado = this.graduado;
        this.total = this.filGraduado.length;
      }, error => {
        if (error.status === 401) {
          this.token.removeToken();
          this.auth.changeStatus(false);
          this.router.navigateByUrl('/login').then();
        } else {
          console.log(error);
        }
      }
    );
  }

  verGraduado(grad: Graduado) {
    const modalRef = this.modalService.open(GraduadoViewComponent, {centered: true});
    modalRef.componentInstance.proveedor = grad;
  }

}
