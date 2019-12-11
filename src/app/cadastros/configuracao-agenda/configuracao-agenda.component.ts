import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  falhaNaBusca: boolean;
  medico: Medico;
  configuracaoAgenda = new ConfiguracaoAgenda();
  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  configuracaoMinutosAgendaEnum = EConfiguracaoMinutosAgenda;
  configMinutos: string = EConfiguracaoMinutosAgenda[3].toString();

  constructor(private medicoService: MedicoService,
    private router: Router, private modalService: NgbModal, private appService: AppService) {
  }

  public ngOnInit(): void {
    this.isSpinnerVisible = true;

    this.alimentarModelos().subscribe(c => {
      
      this.isSpinnerVisible = false;

      // veio da agenda
      if (this.medicoService.medico != null) {
        this.medico = this.medicos.find(c => c.id == this.medicoService.medico.id);
        this.trocaMedico();
      }      
    });
  }

  alimentarModelos() {

    let observableBatch = []
    this.criaConfiguracao();

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario(this.appService.retornarUsuarioCorrente().id, this.appService.retornarClinicaCorrente().id)
      .map(medicos => {
        this.medicos = medicos;

        this.medico = this.medicos.find(c => true);

        if (this.medico != null && !this.util.isNullOrWhitespace(this.medico.configuracaoAgendaId)) {
          let reqConfig = this.buscaConfigMedico();
          observableBatch.push(reqConfig);
        }
      });

    observableBatch.push(reqMedicos);

    return forkJoin(observableBatch);
  }

  buscaConfigMedico() {
    return this.medicoService.buscarConfiguracaoAgenda(this.medico.configuracaoAgendaId).map(configuracao => {
      this.medico.configuracaoAgenda = configuracao;

      if (this.medico.configuracaoAgenda != null && this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {
        this.configuracaoAgendaDias = this.medico.configuracaoAgenda.configuracaoAgendaDias;
        this.configMinutos = EConfiguracaoMinutosAgenda[this.medico.configuracaoAgenda.configuracaoMinutosAgenda];
      }
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

    if (this.medico.configuracaoAgenda == null)
      this.medico.configuracaoAgenda = new ConfiguracaoAgenda();

    this.medico.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;

    this.medicoService.salvarConfiguracaoAgendaMedico(this.medico).subscribe(
      data => {
        this.modalService.open(this.modalSalvouComSucesso);
        this.router.navigate(["cadastros/configuracaoagenda/", { id: this.medico.id }]);
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

      if (this.medico != null && this.medico.configuracaoAgenda != null)
        this.medico.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;
    }
  }

  criaConfiguracao() {
    this.configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();

    for (var i = 0; i < 7; i++) {
      this.configuracaoAgendaDias.push(new ConfiguracaoAgendaDias(i));
    }
    this.configMinutos = EConfiguracaoMinutosAgenda[3].toString();
  }

  selecionaConfiguracaoMinutos(value: string) {
    if (this.medico.configuracaoAgenda == null)
      this.medico.configuracaoAgenda = this.configuracaoAgenda;
    this.medico.configuracaoAgenda.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda[value];
  }

}
