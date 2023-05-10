import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  index(): any{
    return this.http.get(`${this.apiUrl}/pedidos`)
  }

  indexMine(): any {
    return this.http.get(`${this.apiUrl}/misPedidos`)
  }
}
