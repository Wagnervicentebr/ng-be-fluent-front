import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  private readonly PATH: string = "auth/registre" 

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, usuario);
  }
}
