import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-select-grupo',
  templateUrl: './select-grupo.component.html',
  styleUrls: ['./select-grupo.component.css']
})
export class SelectGrupoComponent implements OnInit {

  private idCarrera:any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idCarrera = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onGrupoSelected(grupo: string): void {
    console.log('Seleccionado carrera: ' + this.idCarrera + ', y grupo: ' + grupo);
    if (grupo == 'graduados' ){
      this.router.navigate(['/listagraduados/'+this.idCarrera])
    }if (grupo == 'estudiantes'){
      this.router.navigate(['/listaalumnos/'+this.idCarrera])
    }
  }

}
