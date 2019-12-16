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
import { ModalAlteraSenhaComponent } from '../../shared/modal/modal-altera-senha.component';
import { UsuarioService } from '../../services/usuario.service';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService, private usuarioService: UsuarioService, private funcionarioService: FuncionarioService,
    private modalService: NgbModal, public appService: AppService) { }

  mensagemErro = "";
  util = new Util();
  usuario = new Usuario();

  ngOnInit() {
    this.loginService.logout();
  }  

  onLoggedin() {
    console.log("OPAAA");
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
              
              if (usuarioRetorno.senhaPadrao) {
                this.validaSenhaPadrao(usuarioRetorno);
              }
              else {
                if (this.util.retornaUsuarioAdmOuMedico(usuarioRetorno))
                  this.router.navigate(['/dashboard/dashboardanalitico']);
                else if (usuarioRetorno.funcionario != null && this.funcionarioService.PermitirVisualizarAgenda(usuarioRetorno.funcionario))
                  this.router.navigate(['/agenda/agenda']);
                else //se o usuário for um funcionário sem permissão dash e agenda, redireciona para o cadastro do funcinario
                {
                  this.router.navigate(['/listagem/listagemfuncionario']);
                }
              }

            });
          else
            this.router.navigate(['/listagem/listagemfuncionario']);
        }

      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent);
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    );
  }

  // se a senha estiver igual a padrão chama a tela de alteração de senha
  validaSenhaPadrao(usuario:Usuario) {
    var modal = this.modalService.open(ModalAlteraSenhaComponent, { windowClass: "modal-holder" });

    modal.result.then((alteraSenha) => {
      alteraSenha.usuarioId = usuario.id;
      this.usuarioService.alterarSenha(alteraSenha).subscribe(c => {
        if (c == null) {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente.";
        }
        else {
          var modal = this.modalService.open(ModalSucessoComponent, { windowClass: "modal-holder" });
          modal.componentInstance.mensagem = "Senha alterada com sucesso";
          modal.componentInstance.titulo = "Alterado com sucesso";
          modal.result.then(() => this.loginService.logout());
        }
      });
    },
      error => {

      });
  }

}
