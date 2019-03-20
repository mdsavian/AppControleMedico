import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioCorrent: Usuario;
  title = 'app';

  constructor(
    public router: Router, 
    private loginService: LoginService) {
    this.loginService.usuarioCorrente.subscribe(c => this.usuarioCorrent = c)
  }

  logout()
  {
    this.loginService.logout();  
    this.router.navigate(['../authentication/login']);  
  }
}
