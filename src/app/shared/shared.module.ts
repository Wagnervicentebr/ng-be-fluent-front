import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpUtilService } from './services/http-util.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
