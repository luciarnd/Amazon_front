import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  addForm!: FormGroup
  selectedImage!: any;

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.addForm = new FormGroup({
      nombre: new FormControl(''),
      precio: new FormControl(0),
      marca: new FormControl(''),
      image: new FormControl(''),
      descripcion: new FormControl('')
    })
  }

  onSelectImage(event: any) {
    this.selectedImage = event.target.files[0];
 }

  crearProducto() {
    const formData = new FormData();
    formData.append('nombre', this.addForm.value.nombre);
    formData.append('precio', this.addForm.value.precio);
    formData.append('marca', this.addForm.value.marca);
    formData.append('descripcion', this.addForm.value.descripcion);
    formData.append('image', this.selectedImage);

    this.productoService.create(formData).subscribe(() => {
      this.router.navigateByUrl('')
    })
  }
}
