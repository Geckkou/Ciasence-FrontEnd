import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Produto from '../model/produto.model';

@Injectable({providedIn: 'root'})
export class ProdutoService {

  readonly apiUrl = 'http://localhost:8081/swagger-ui.html#/'

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public postProdutos(produtos: any): Observable<Produto> {
    return this.http.post<any>(this.apiUrl, produtos, this.HttpOptions);
  }

}
