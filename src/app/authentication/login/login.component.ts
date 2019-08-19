import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('modalErro',{ read: TemplateRef, static:false}) private modalErro: TemplateRef<any>;

  constructor(public router: Router, private loginService: LoginService, private modalService: NgbModal) { }
  mensagemErro = "";
  ngOnInit() {
    this.loginService.logout();
  }

  usuario: Usuario = {
    login: "", senha: "", ultimoLogin: "", ativo: true, tipoUsuario: 0,
    medicoId: "", funcionarioId: "", id: ""
  };

  onLoggedin() {
    this.loginService.login(this.usuario).pipe(first()).subscribe(
      data => {

        if (data == null) {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Usuário/Senha inválidos. Verifique!";
        }
        else if (data.medicoId != "") {

          this.router.navigate(['/agenda/agenda']);
        }
        else
          this.router.navigate(["/agenda/agenda/"]);

      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent);
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    );
  }
}
