import { Component, OnInit } from '@angular/core';
import { AuthStateService } from './shared/auth-state.service';
import { TokenService } from './shared/token.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  userLogged: boolean = false;

  constructor(private auth: AuthStateService, public token: TokenService, public router: Router) {}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.userLogged = val;
    })
  }

  loggout() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['']);
  }
}
