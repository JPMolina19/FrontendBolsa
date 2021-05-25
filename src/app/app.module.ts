import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EncrDecrService} from "./services/EncrDecrService";
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectGrupoComponent } from './components/select-grupo/select-grupo.component';
import { ListadoGraduadoComponent } from './components/listado-graduado/listado-graduado.component';
import { GraduadoViewComponent } from './components/graduado-view/graduado-view.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ListadoAlumnoComponent } from './components/listado-alumno/listado-alumno.component';
import { CarrerasPipe } from './pipes/carreras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SelectGrupoComponent,
    ListadoGraduadoComponent,
    GraduadoViewComponent,
    ListadoAlumnoComponent,
    CarrerasPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
