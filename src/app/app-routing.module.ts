import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {BeforeLoginService} from "./services/before-login.service";

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},

]
