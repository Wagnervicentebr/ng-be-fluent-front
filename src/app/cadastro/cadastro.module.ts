import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CadastroRoutingComponent } from './cadastro-routing.component';
import { CadastroComponent } from './components/cadastro.component';
import { CadastroService } from './services/cadastro.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroComponent,
    CadastroRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
