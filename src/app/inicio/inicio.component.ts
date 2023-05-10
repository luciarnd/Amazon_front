import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  productos: any;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.index().subscribe((data: any) => {
      this.productos = data
    })
  }

}
