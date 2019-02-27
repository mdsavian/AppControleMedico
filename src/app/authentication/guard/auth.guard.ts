import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../modelos/usuario.';
import { Util } from '../../uteis/Util';

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

        this.loginService.validaUsuario(usuario).subscribe(c=> {
            console.log("opaaa " + c);
            if (c == false)
            {
                this.loginService.logout();
                this.router.navigate(['/authentication/login']); 
            }
        },
        error=>
        {
            this.router.navigate(['/authentication/login']); 
 
        });

        return true;
    }
}
