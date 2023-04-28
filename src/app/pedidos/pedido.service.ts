import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  index(): any{
    this.http.get(`${this.apiUrl}/pedidos`)
  }

  indexMine(): any {
    this.http.get(`${this.apiUrl}/misPedidos`)
  }

  edit(pedido: Pedido) {
    this.http.put(`${this.apiUrl}/pedido/${pedido.id}`, pedido)
  }

  delete(id:number) {
    this.http.delete(`${this.apiUrl}/pedido/${id}`)
  }
}
