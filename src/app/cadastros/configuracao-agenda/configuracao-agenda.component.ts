import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from '../../services/medico.service';
import { ConfiguracaoAgenda } from '../../modelos/configuracaoAgenda';
import { Medico } from '../../modelos/medico';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ConfiguracaoAgendaDias } from '../../modelos/configuracaoAgendaDias';
import { EConfiguracaoMinutosAgenda } from '../../enums/EConfiguracaoMinutosAgenda';

@Component({
  templateUrl: './configuracao-agenda.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ConfiguracaoAgendaComponent implements OnInit {

  @ViewChild('modalSalvouComSucesso') modalSalvouComSucesso: TemplateRef<any>;
  configuracaoAgendaDias = new Array<ConfiguracaoAgendaDias>();
  medicos = new Array<Medico>();
  nomeMedicos: Array<string>;
  falhaNaBusca: boolean;
  medico: Medico;
  configuracaoAgenda = new ConfiguracaoAgenda();
  medicoSelecionado: string;
  patternHora = "([01][0-9]|2[0-3])[0-5][0-9]";
  configuracaoMinutosAgendaEnum = EConfiguracaoMinutosAgenda;
  configMinutos: string = EConfiguracaoMinutosAgenda[3].toString();

  constructor(private medicoService: MedicoService,
    private router: Router, private modalService: NgbModal, private route: ActivatedRoute, ) {
  }

  public ngOnInit(): void {

    for (var i = 0; i < 7; i++) {
      this.configuracaoAgendaDias.push(new ConfiguracaoAgendaDias(i));
    }
    
    var id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.medicoService.buscarPorId(id).subscribe(dado => {
        this.medico = dado;
        this.medicoSelecionado = dado.nomeCompleto;
        if (this.medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {
          this.configuracaoAgendaDias = this.medico.configuracaoAgenda.configuracaoAgendaDias;
          this.configMinutos = EConfiguracaoMinutosAgenda[this.medico.configuracaoAgenda.configuracaoMinutosAgenda];
        }
      });
    }

    this.medicoService.Todos().subscribe(medicos => {
      this.medicos = medicos;
      this.nomeMedicos = new Array<string>();
      medicos.forEach(d => {
        this.nomeMedicos.push(d.nomeCompleto);
      });
    });
  }

  public onSubmit(): void {
    if (this.medico.configuracaoAgenda == null)
      this.medico.configuracaoAgenda = new ConfiguracaoAgenda();
    this.medico.configuracaoAgenda.configuracaoAgendaDias = this.configuracaoAgendaDias;

    this.medicoService.salvar(this.medico).subscribe(
      data => {
        var modal = this.modalService.open(this.modalSalvouComSucesso);
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

  selecionaMedico(item: any) {
    var medico = this.medicos.find(c => c.nomeCompleto === item.item);
    if (medico != null && medico.configuracaoAgenda.configuracaoAgendaDias.length > 0) {
      this.medico = medico;
      this.configuracaoAgendaDias = medico.configuracaoAgenda.configuracaoAgendaDias;
      this.configMinutos = EConfiguracaoMinutosAgenda[this.medico.configuracaoAgenda.configuracaoMinutosAgenda];

    }
    else
    {
      for (var i = 0; i < 7; i++) {
        this.configuracaoAgendaDias.push(new ConfiguracaoAgendaDias(i));
      }
      this.configMinutos = EConfiguracaoMinutosAgenda[3].toString();
    }
  }

  selecionaConfiguracaoMinutos(value: string) {
    if (this.medico.configuracaoAgenda == null)
      this.medico.configuracaoAgenda = this.configuracaoAgenda;
    this.medico.configuracaoAgenda.configuracaoMinutosAgenda = EConfiguracaoMinutosAgenda[value];
  }

  buscaMedico = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.nomeMedicos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomeMedicos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )


}
