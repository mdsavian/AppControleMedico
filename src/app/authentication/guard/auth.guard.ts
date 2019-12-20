import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../modelos/usuario';
import { AppService } from '../../services/app.service';
import { FuncionarioService } from '../../services/funcionario.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService,
        private funcionarioService: FuncionarioService,
        private appService: AppService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const usuarioCorrente = this.appService.retornarUsuarioCorrente();
        if (usuarioCorrente && this.ValidaUsuario(usuarioCorrente)) {
            return this.validaPermissao(state.url, usuarioCorrente);
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

    validaPermissao(url: string, usuario: Usuario) {

        if (usuario.funcionario != null && usuario.funcionario.ativo) {

            var funcionario = usuario.funcionario;

            if (!funcionario.permissaoAdministrador) {
                if (url == '/dashboard/dashboardanalitico'
                    || url == '/listagem/listagemcaixa'
                    || url == '/listagem/listagemmedico'
                    || url == '/cadastros/cadastromedico'
                    || url == '/cadastros/cadastroprontuario'
                    || url == '/listagem/listagemformadepagamento'
                    || url == '/cadastros/cadastroformadepagamento'
                    || url == '/listagem/listagemoficio'
                    || url == '/cadastros/cadastrooficio')
                    return false;
            }

            if (!this.funcionarioService.PermitirVisualizarAgenda(funcionario) && url == '/agenda/agenda')
                return false;
        }
        return true;
    }

    ValidaUsuario(usuario: Usuario): boolean {
        this.loginService.validaUsuario(usuario).subscribe(usuario => {
            if (usuario.sessaoAtiva == false) {
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
