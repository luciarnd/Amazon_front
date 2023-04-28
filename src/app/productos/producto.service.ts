import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  index(): any {
    this.http.get(`${this.apiUrl}/productos`)
  }

  edit(producto: Producto) {
    this.http.put(`${this.apiUrl}/producto/${producto.id}`, producto)
  }

  delete(id:number) {
    this.http.delete(`${this.apiUrl}/producto/${id}`)
  }

  find(id: number) {
    this.http.get(`${this.apiUrl}/producto/${id}`)
  }

  create(producto: Producto) {
    this.http.post(`${this.apiUrl}/producto`, producto)
  }
}
