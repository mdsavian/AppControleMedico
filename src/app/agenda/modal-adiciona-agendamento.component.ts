import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { Paciente } from '../modelos/paciente';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Local } from '../modelos/local';
import { Exame } from '../modelos/exame';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import {ModalAdicionaModeloDescricaoComponent} from '../shared/modal/modal-adiciona-modelo-descricao.component';

@Component({
  selector: 'app-modal-adiciona-agendamento.component',
  templateUrl: './modal-adiciona-agendamento.component.html'
})

export class ModalAdicionaAgendamentoComponent {
  agendamento: Agendamento = new Agendamento();
  tipoAgendamentoEnum = ETipoAgendamento;
  tipoAgenda: string = ETipoAgendamento[1].toString();
  nomePacientes: Array<string>;
  pacientes: Array<Paciente> = [];

  locais: Array<Local> = [];
  local: Local;

  procedimentos: Array<Procedimento> = [];
  procedimento: Procedimento;

  exames: Array<Exame> = [];
  exame: Exame;

  cirurgias: Array<Cirurgia> = [];
  cirurgia: Cirurgia;
  falhaNaBusca: boolean;

  // @ViewChild('nomeagendamento', { read: ElementRef }) private nomeagendamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, public modalService:NgbModal) { }

  salvar() {
    //validar se registros preenchidos existem
    this.activeModal.close();
  }

  selecionaTipoAgendamento(value: string) {
    this.agendamento.tipoAgendamento = ETipoAgendamento[value];
  }

  chamaModalAdiciona(nome: string) {
    this.modalService.open(ModalAdicionaModeloDescricaoComponent);      
  }

  buscaPaciente = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        if (this.nomePacientes == null) {
          this.falhaNaBusca = true;
          return false;
        }

        if (term.length < 2) {
          this.falhaNaBusca = true;
          return false;
        }

        this.falhaNaBusca = this.nomePacientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomePacientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  selecionaPaciente(item) {
    var paciente = this.pacientes.find(c => c.nomeCompleto === item.item);
    if (paciente != null)
      this.agendamento.paciente = paciente;
  }

}