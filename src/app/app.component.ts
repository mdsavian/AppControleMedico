import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

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
    private appService: AppService, private loginService:LoginService) {
    this.usuarioCorrent = this.appService.retornarUsuarioCorrente();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['../authentication/app']);
  }
}
