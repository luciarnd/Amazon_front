import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  producto: any;
  editForm!: FormGroup

  constructor(private router: Router, private productoService: ProductoService) {}

  ngOnInit(): void {
    let id = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1))
    this.productoService.find(id).subscribe((data) => {
      this.producto = data
    })

    this.editForm = new FormGroup({
      nombre: new FormControl(''),
      precio: new FormControl(0),
      marca: new FormControl('')
    })
  }

  editarProducto(id: number) {
    this.productoService.edit(id, this.editForm.value).subscribe(() => {
      this.router.navigateByUrl('')
    })
  }
}
