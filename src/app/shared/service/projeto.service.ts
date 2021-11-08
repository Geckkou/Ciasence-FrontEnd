import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Projeto from '../model/projeto.model';

@Injectable({providedIn: 'root'})
export class ProjetoService {

  readonly apiUrl = 'http://localhost:8081/swagger-ui.html#/'

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public postProjetos(projetos: any): Observable<Projeto> {
    return this.http.post<any>(this.apiUrl, projetos, this.HttpOptions);
  }

  

}
