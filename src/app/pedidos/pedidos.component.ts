import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';
import { AuthService, User } from '../shared/auth.service';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  pedidos: any;
  loggedUser: any;

  constructor(private pedidosService: PedidoService, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.profileUser().subscribe((data) => {
      this.loggedUser = data
      console.log(this.loggedUser)
      if(this.loggedUser.role_id == 1) {
        this.pedidosService.index().subscribe((data: any) => {
          this.pedidos = data
        })
      } else {
        this.pedidosService.indexMine().subscribe((data: any) => {
          this.pedidos = data
          console.log(this.pedidos)
        })
      }
    })
  }
}
