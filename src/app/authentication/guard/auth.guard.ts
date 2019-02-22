import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../modelos/usuario.';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const usuarioCorrente = this.loginService.usuarioCorrenteValor;
        if (usuarioCorrente && this.ValidaUsuario(usuarioCorrente)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    ValidaUsuario(usuario:Usuario) : boolean {
        var data = new Date(Date.parse(usuario.token.substring(0, 19)));
        console.log(usuario.token.substring(0, 19))
        console.log("login " + data + " " + data.valueOf());
        console.log(new Date().valueOf());
        if (Date.parse(usuario.token.substring(0, 19)) - Date.now() > 30) {
            console.log("opa passou");
        }

        return true;
    }
}
