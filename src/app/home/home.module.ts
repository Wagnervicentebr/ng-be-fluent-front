import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';
import { HomeRoutingComponent } from './home-routing.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
