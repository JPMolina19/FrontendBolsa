import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {EncrDecrService} from "./services/EncrDecrService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
