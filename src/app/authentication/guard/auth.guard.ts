import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../modelos/usuario';
import { AppService } from '../../services/app.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService,
        private appService:AppService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const usuarioCorrente = this.appService.retornarUsuarioCorrente();
        
        if (usuarioCorrente && this.ValidaUsuario(usuarioCorrente)) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

    ValidaUsuario(usuario: Usuario): boolean {
        this.loginService.validaUsuario(usuario).subscribe(c => {
            if (c == false) {
                this.loginService.logout();
                this.router.navigate(['/authentication/login']);
            }
        },
            error => {
                this.router.navigate(['/authentication/login']);
            });

        return true;
    }
}
