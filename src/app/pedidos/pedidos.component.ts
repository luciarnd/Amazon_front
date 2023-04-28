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
    this.getLoggedUser()

    if(this.loggedUser.role_id == 1) {
      this.pedidosService.index().subscribe((data: Pedido[]) => {
        this.pedidos = data
      })
    } else {
      this.pedidosService.indexMine().subscribe((data: Pedido[]) => {
        this.pedidos = data
      })
    }
  }

  getLoggedUser() {
    this.authService.profileUser().subscribe((data) => {
      this.loggedUser = data;
    })
  }

}
