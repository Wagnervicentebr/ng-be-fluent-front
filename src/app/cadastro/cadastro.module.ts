import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './components/cadastro.component';
import { CadastroRoutingComponent } from './cadastro-routing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CadastroComponent,
    CadastroRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CadastroModule { }
