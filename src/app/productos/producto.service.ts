import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }
}
