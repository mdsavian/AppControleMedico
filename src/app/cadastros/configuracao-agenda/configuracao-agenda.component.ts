import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from '../../services/medico.service';
import { ConfiguracaoAgenda } from '../../modelos/configuracaoAgenda';
import { Medico } from '../../modelos/medico';
import { ConfiguracaoAgendaDias } from '../../modelos/configuracaoAgendaDias';
import { EConfiguracaoMinutosAgenda } from '../../enums/EConfiguracaoMinutosAgenda';
import { Util } from '../../uteis/Util';
import { AppService } from '../../services/app.service';
import { forkJoin } from 'rxjs';
import { ConfiguracaoAgendaService } from '../../services/configuracaoAgenda.service';
import { ClinicaService } from '../../services/clinica.service';
import { Clinica } from '../../modelos/clinica';

@Component({
  templateUrl: './configuracao-agenda.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ConfiguracaoAgendaComponent implements OnInit {

  @ViewChild('modalSalvouComSucesso', { read: TemplateRef, static: false }) modalSalvouComSucesso: TemplateRef<any>;

  util = new Util();
  isSpinnerVisible = false;
  configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();
  medicos = new Array<Medico>();
  medico: Medico;
  clinicas = new Array<Clinica>();
  clinica: Clinica;
  falhaNaBusca: boolean;
  configuracaoAgenda = new ConfiguracaoAgenda();
  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  configuracaoMinutosAgendaEnum = EConfiguracaoMinutosAgenda;
  configMinutos: string = EConfiguracaoMinutosAgenda[3].toString();

  constructor(private medicoService: MedicoService,
    private router: Router, private modalService: NgbModal, private clinicaService: ClinicaService, private configuracaoAgendaService: ConfiguracaoAgendaService, private appService: AppService) {
  }

  public ngOnInit(): void {
    this.isSpinnerVisible = true;

    this.alimentarModelos().subscribe(c => {
      // veio da agenda
      if (this.medicoService.medico != null) {
        this.medico = this.medicos.find(c => c.id == this.medicoService.medico.id);        
      }
      this.trocaMedico();
    });
  }

  alimentarModelos() {

    let observableBatch = [];

    this.criaConfiguracao();

    let reqClinica = this.clinicaService.buscarPorUsuario(this.appService.retornarUsuarioCorrente().id).map(dados => {
      this.clinicas = dados;
      this.clinica = this.clinicas.find(c => c.id == this.appService.retornarClinicaCorrente().id);
    });

    observableBatch.push(reqClinica);

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario(this.appService.retornarUsuarioCorrente().id, this.appService.retornarClinicaCorrente().id)
      .map(medicos => {
        this.medicos = medicos;

        this.medico = this.medicos.find(c => true);
      });

    observableBatch.push(reqMedicos);

    return forkJoin(observableBatch);
  }

  buscaConfigMedico() {
    return this.configuracaoAgendaService.buscarConfiguracaoAgenda(this.medico.id, this.clinica.id).map(configuracao => {

      if (configuracao != null) {
        this.configuracaoAgenda = configuracao;

        if (this.configuracaoAgenda != null && this.configuracaoAgenda.configuracaoAgendaDias.length > 0) {
          this.configuracaoAgendaDias = this.configuracaoAgenda.configuracaoAgendaDias;
          this.configMinutos = EConfiguracaoMinutosAgenda[this.configuracaoAgenda.configuracaoMinutosAgenda];
        }
      }
      else
        this.criaConfiguracao();
    });
  }

  trocaMedico() {
    this.isSpinnerVisible = true;
    this.buscaConfigMedico().subscribe(c => {
      this.isSpinnerVisible = false;
    });
  }

  public marcaTodos(e: any) {
    this.configuracaoAgendaDias.forEach(config => {
      config.configurado = e.target.checked;
    });
  }

  public onSubmit(): void {

    this.configuracaoAgenda.medicoId = this.medico.id;
    this.configuracaoAgenda.clinicaId = this.clinica.id;
    this.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;

    this.configuracaoAgendaService.salvar(this.configuracaoAgenda).subscribe(
      data => {
        this.modalService.open(this.modalSalvouComSucesso);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      });
  }

  alteraHora(event: any) {
    var regexHora = new RegExp(this.patternHora);
    var hora = event.target.value.replace(":", "");

    if (regexHora.test(hora)) {
      switch (event.target.id) {
        case ("primeiroHorarioInicialTodos"): {
          for (var i = 0; i < 7; i++)
            this.configuracaoAgendaDias[i].primeiroHorarioInicial = event.target.value;
          break;
        }
        case ("primeiroHorarioFinalTodos"): {
          for (var i = 0; i < 7; i++)
            this.configuracaoAgendaDias[i].primeiroHorarioFinal = event.target.value;
          break;
        }
        case ("segundoHorarioInicialTodos"):
          {
            for (var i = 0; i < 7; i++)
              this.configuracaoAgendaDias[i].segundoHorarioInicial = event.target.value;

            break;
          }
        case ("segundoHorarioFinalTodos"):
          {
            for (var i = 0; i < 7; i++)
              this.configuracaoAgendaDias[i].segundoHorarioFinal = event.target.value;
            break;
          }
      }

      this.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;
    }
  }

  criaConfiguracao() {
    this.configuracaoAgenda = new ConfiguracaoAgenda();
    
    this.configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();

    for (var i = 0; i < 7; i++) {
      this.configuracaoAgendaDias.push(new ConfiguracaoAgendaDias(i));
    }
    this.configMinutos = EConfiguracaoMinutosAgenda[3].toString();

    this.configuracaoAgenda.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda["20 Minutos"];
    this.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;

  }

  selecionaConfiguracaoMinutos(value: string) {
    this.configuracaoAgenda.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda[value];
  }
}