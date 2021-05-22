import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {BeforeLoginService} from "./services/before-login.service";
import {HomeComponent} from "./components/home/home.component";
import {AfterLoginService} from "./services/after-login.service";
import {SelectGrupoComponent} from "./components/select-grupo/select-grupo.component";

const routes: Routes = [
  //inicio
  {path: '', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  // selección de carreras
  {path: 'home', component: HomeComponent, canActivate: [AfterLoginService]},
  // selección de grupo (estudiantes, graduados)
  {path: 'grupo/:id', component: SelectGrupoComponent, canActivate: [AfterLoginService]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
