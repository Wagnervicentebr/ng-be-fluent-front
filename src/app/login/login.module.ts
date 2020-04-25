import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { LoginRoutingComponent } from './login-routing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  LoginComponent,
  LoginRoutingComponent
],
  imports: [
    CommonModule,
    RouterModule
  ] 
})
export class LoginModule { }
