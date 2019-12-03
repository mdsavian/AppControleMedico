import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { AppService } from '../../services/app.service';
import { Util } from '../../uteis/Util';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService, private funcionarioService: FuncionarioService,
    private modalService: NgbModal, public appService: AppService) { }
  mensagemErro = "";

  util = new Util();
  ngOnInit() {
    this.loginService.logout();
  }

  usuario = new Usuario();

  onLoggedin() {
    this.loginService.login(this.usuario).pipe(first()).subscribe(
      usuarioRetorno => {

        if (usuarioRetorno == null) {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Usuário/Senha inválidos. Verifique!";
        }
        else {
          if (usuarioRetorno.login != "admin")
            this.appService.buscarClinicasUsuario(usuarioRetorno).subscribe(clinicas => {
              this.appService.armazenarClinica(clinicas.find(c => true));
              

              if (this.util.retornaUsuarioAdmOuMedico(usuarioRetorno))
                this.router.navigate(['/dashboard/dashboardanalitico']);
              else if (usuarioRetorno.funcionario != null && this.funcionarioService.PermitirVisualizarAgenda(usuarioRetorno.funcionario))
                this.router.navigate(['/agenda/agenda']);
              else //se o usuário for um funcionário sem permissão dash e agenda, redireciona para o cadastro do funcinario
              {
                this.router.navigate(['/listagem/listagemfuncionario']);
              }

            });
          else
            this.router.navigate(['/dashboard/dashboardanalitico']);
        }

      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent);
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    );
  }
}
