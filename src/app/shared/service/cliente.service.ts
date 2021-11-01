import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cliente from '../model/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly apiUrl = 'http://localhost:8081/swagger-ui.html#/'

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public async getClientes(): Promise<Cliente[]> {
    return this.http.get<Cliente[]>('${this.apiUrl}/clientes').toPromise();
  }

  public postClientes(clientes: any): Observable<Cliente> {
    return this.http.post<any>(this.apiUrl, clientes, this.HttpOptions);
  }
}
