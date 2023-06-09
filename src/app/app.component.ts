import { Component, OnInit } from '@angular/core';
import { AuthStateService } from './shared/auth-state.service';
import { TokenService } from './shared/token.service'
import { Router } from '@angular/router';
import { ProductoService } from './productos/producto.service';
import { Producto } from './productos/producto';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  userLogged: boolean = false;
  productos: Producto[] = [];
  user: any

  constructor(private auth: AuthStateService, public token: TokenService, public router: Router, public productoService: ProductoService, private authService: AuthService) {}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.userLogged = val;
      console.log(this.userLogged)
    })

    this.productoService.index().subscribe((data: Producto[]) => {
      this.productos = data;
    })

    this.authService.profileUser().subscribe((data) => {
      this.user = data;
    })
  }

  loggout() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['']);
  }
}
