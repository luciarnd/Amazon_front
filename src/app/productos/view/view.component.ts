import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  producto: any;
  loggedUser: any;

  constructor(private router: Router, private productoService: ProductoService, private authService: AuthService) {}

  ngOnInit(): void {
    let id = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1))
    this.productoService.find(id).subscribe((data) => {
      this.producto = data
    })

    this.authService.profileUser().subscribe((data) => {
      this.loggedUser = data;
      console.log(this.loggedUser)
    })
  }

  borrarProducto(id: number) {
    this.productoService.delete(id).subscribe(() => {
      this.router.navigateByUrl('')
    })
  }
}
