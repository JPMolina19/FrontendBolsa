import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {FormBuilder} from "@angular/forms";
import {PerfilService} from "../../services/perfil.service";
import {Alumno} from "../../models/alumno";
import {GraduadoViewComponent} from "../graduado-view/graduado-view.component";
import {Graduado} from "../../models/graduado";

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  public title: string;
  public alumno: Array<Alumno>;
  public filAlumno: Array<Alumno> ;
  public total: number;
  public page = 1;
  public itemsPerPage = 10;
  public query = '';
  private idCarrera:any;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private auth: AuthService,
    private token: TokenService,
    private formBuilder: FormBuilder,
    private alumnoService: PerfilService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.title = 'Lista Alumnos';
    this.filAlumno =[];
    this.alumno = [];
    this.total = 0
  }

  ngOnInit(): void {
    this.idCarrera = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Carrera: ' + this.idCarrera);
    this.alumnoService.getAlumnos(this.idCarrera).subscribe(
      response => {
        this.alumno = response;
        this.filAlumno = this.alumno;
        this.total = this.filAlumno.length;
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

  verAlumno(alum: Alumno) {
    const modalRef = this.modalService.open(GraduadoViewComponent, {centered: true});
    modalRef.componentInstance.proveedor = alum;
  }

}
