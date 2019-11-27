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
        
        console.log(route);
        if (usuarioCorrente && this.ValidaUsuario(usuarioCorrente) && this.validaPermissao(route, usuarioCorrente)) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

    validaPermissao(route: ActivatedRouteSnapshot,usuario:Usuario )
    {
        // if (usuario.funcionario != null && usuario.funcionario.ativo) {

        //     var funcionario = usuario.funcionario;
    
        //     if (!funcionario.permissaoAdministrador) {
                
        //       itensSideBar = this.removeMenu(itensSideBar, "Financeiro/Dashboard Analítico");
        //       itensSideBar = this.removeMenu(itensSideBar, "Financeiro/Caixas");
        //       itensSideBar = this.removeMenu(itensSideBar, "Cadastro/Médico");
        //       itensSideBar = this.removeMenu(itensSideBar, "Cadastro/Financeiro/Forma de Pagamento");
        //       itensSideBar = this.removeMenu(itensSideBar, "Cadastro/Funcionário/Ofício");
        //     }
    
        //     if (!this.util.hasItems(funcionario.medicosId) || !funcionario.visualizaAgenda) {
        //       itensSideBar = this.removeMenu(itensSideBar, "Agenda");
        //     }
    
        //     this.sidebarnavItems = itensSideBar;
        //   }
        //   else return true;
        return true;
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
