import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './productos/view/view.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EditComponent } from './productos/edit/edit.component';
import { CreateComponent } from './productos/create/create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: InicioComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignupComponent},
  {path: 'producto/view/:id', component:ViewComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'producto/edit/:id', component: EditComponent},
  {path: 'producto/add', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
