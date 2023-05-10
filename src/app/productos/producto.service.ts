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
    return this.http.get(`${this.apiUrl}/productos`)
  }

  edit(id: number, producto: Producto) {
    return this.http.put(`${this.apiUrl}/producto/${id}`, producto)
  }

  delete(id:number) {
    return this.http.delete(`${this.apiUrl}/producto/${id}`)
  }

  find(id: number) {
    return this.http.get(`${this.apiUrl}/producto/${id}`)
  }

  create(producto: Producto) {
    return this.http.post(`${this.apiUrl}/producto`, producto)
  }
}
