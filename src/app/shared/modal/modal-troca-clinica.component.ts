import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClinicaService } from '../../services/clinica.service';
import { Clinica } from '../../modelos/clinica';
import { AppService } from '../../services/app.service';
import { Util } from '../../uteis/Util';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-modal-troca-clinica.component',
  templateUrl: './modal-troca-clinica.component.html'
})

export class ModalTrocaClinicaComponent {
  clinicas: Array<Clinica>;
  isSpinnerVisible: boolean;
  util = new Util();
  usuario: Usuario;

  constructor(public activeModal: NgbActiveModal, private clinicaService: ClinicaService, private appService: AppService, private loginService: LoginService) { }

  ngOnInit() {
    this.isSpinnerVisible = true;
    this.usuario = this.appService.retornarUsuarioCorrente();

    this.clinicaService.buscarPorUsuario(this.usuario.id).subscribe(clinicas => {

      //retira a clinica corrente
      var clinicaCorrente = this.appService.retornarClinicaCorrente();
      var clinicaRemover = clinicas.indexOf(clinicas.find(c => c.id == clinicaCorrente.id));
      clinicas.splice(clinicaRemover, 1);

      clinicas.forEach(clin => {
        clin.cnpj = this.util.formataCnpj(clin.cnpj);
        clin.razaoSocial = clin.razaoSocial.toUpperCase();
      });

      this.clinicas = clinicas;
      this.isSpinnerVisible = false;
    });
  }

  trocarClinica(id: string) {    
    this.appService.armazenarClinica(this.clinicas.find(c => c.id == id));
    this.activeModal.close();
    this.loginService.redirecionarRota(this.usuario);
  }

  fechar() {
    this.activeModal.close();
  }
}