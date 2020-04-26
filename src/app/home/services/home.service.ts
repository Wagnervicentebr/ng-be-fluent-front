import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly PATH = "home"

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
    ) { }

  home(): Observable<any> {
    return this.http.post(env.baseUrlApi + this.PATH, null, this.httpUtil.headers())
  }
}
