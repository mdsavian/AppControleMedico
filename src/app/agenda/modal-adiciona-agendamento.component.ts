import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ETipoAgendamento } from '../enums/ETipoAgendamento';
import { Agendamento } from '../modelos/agendamento';
import { Paciente } from '../modelos/paciente';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Local } from '../modelos/local';
import { LocalService } from '../services/local.service';
import { ProcedimentoService } from '../services/procedimento.service';
import { ExameService } from '../services/exame.service';
import { CirurgiaService } from '../services/cirurgia.service';
import { Exame } from '../modelos/exame';
import { Cirurgia } from '../modelos/cirurgia';
import { Procedimento } from '../modelos/procedimento';
import { ModalAdicionaModeloDescricaoComponent } from '../shared/modal/modal-adiciona-modelo-descricao.component';
import { ModalCadastroPacienteComponent } from '../cadastros/paciente/modal-cadastro-paciente.component';

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

  @ViewChild('tipoAgendamento', { read: ElementRef }) private tipoAgendamento: ElementRef;

  constructor(public activeModal: NgbActiveModal, public modalService: NgbModal, private localService: LocalService,
    private exameService: ExameService, private cirurgiaService: CirurgiaService, private procedimentoService: ProcedimentoService) { }

  salvar() {
    //validar se registros preenchidos existem
    this.activeModal.close();
  }

  fechar() {
    this.activeModal.close();
  }

  ngOnInit() {
    this.tipoAgendamento.nativeElement.focus();
  }

  selecionaTipoAgendamento(value: string) {
    this.agendamento.tipoAgendamento = ETipoAgendamento[value];
  }
  adicionaPaciente() {
    var modalNovoPaciente = this.modalService.open(ModalCadastroPacienteComponent, { size: 'lg' })
  }
  chamaModalAdiciona(nome: string) {
    var modalAdiciona = this.modalService.open(ModalAdicionaModeloDescricaoComponent);

    switch (nome) {
      case "Local": {
        modalAdiciona.componentInstance.descricaoErro = "Local obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Local";
        modalAdiciona.componentInstance.mostrarCor = false;

        modalAdiciona.result.then((local) => {
          if (local != null && local.descricao != '') {

            var localExistente = this.locais.find(c => c.descricao == local.descricao);
            if (localExistente != null) {
              this.agendamento.local = localExistente;
              this.local = localExistente;
            }
            else {

              this.local = new Local();
              this.local.descricao = local.descricao;
              this.locais.push(this.local);

              this.localService.salvar(this.local).subscribe(localCadastrado => {
                this.agendamento.local = localCadastrado;
              });

              this.local = this.locais.find(c => c.descricao == local.descricao);
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Cirurgia": {
        modalAdiciona.componentInstance.descricaoErro = "Cirurgia obrigatória.";
        modalAdiciona.componentInstance.labelDescricao = "Cirurgia";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((cirurgia) => {
          if (cirurgia != null && cirurgia.descricao != '') {

            var cirurgiaExistente = this.cirurgias.find(c => c.descricao == cirurgia.descricao);

            if (cirurgiaExistente != null) {
              this.agendamento.cirurgia = cirurgiaExistente;
              this.cirurgia = cirurgiaExistente;
            }
            else {

              this.cirurgia = new Cirurgia();
              this.cirurgia.descricao = cirurgia.descricao;
              this.cirurgia.cor = cirurgia.cor;
              this.cirurgias.push(this.cirurgia);

              this.cirurgia = this.cirurgias.find(c => c.descricao == cirurgia.descricao);
              this.cirurgiaService.salvar(this.cirurgia).subscribe(cirurgiaCadastrado => {
                this.agendamento.cirurgia = cirurgiaCadastrado;
              });
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Procedimento": {
        modalAdiciona.componentInstance.descricaoErro = "Procedimento obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Procedimento";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((procedimento) => {
          if (procedimento != null && procedimento.descricao != '') {

            var procedimentoExistente = this.procedimentos.find(c => c.descricao == procedimento.descricao);

            if (procedimentoExistente != null) {
              this.agendamento.procedimento = procedimentoExistente;
              this.procedimento = procedimentoExistente;
            }
            else {
              this.procedimento = new Cirurgia();
              this.procedimento.descricao = procedimento.descricao;
              this.procedimento.cor = procedimento.cor;

              this.procedimentos.push(this.procedimento);
              this.procedimento = this.procedimentos.find(c => c.descricao == procedimento.descricao);

              this.procedimentoService.salvar(this.procedimento).subscribe(procedimentoCadastrado => {
                this.agendamento.procedimento = procedimentoCadastrado;
              })
            }
          }
        }).catch((error) => { })
        break;
      }
      case "Exame": {
        modalAdiciona.componentInstance.descricaoErro = "Exame obrigatório.";
        modalAdiciona.componentInstance.labelDescricao = "Exame";
        modalAdiciona.componentInstance.mostrarCor = true;

        modalAdiciona.result.then((exame) => {
          if (exame != null && exame.descricao != '') {

            var exameExistente = this.exames.find(c => c.descricao == exame.descricao);

            if (exameExistente != null) {
              this.agendamento.exame = exameExistente;
              this.exame = exameExistente;
            }
            else {
              this.exame = new Cirurgia();
              this.exame.descricao = exame.descricao;
              this.exame.cor = exame.cor;

              this.exames.push(this.exame);
              this.exame = this.exames.find(c => c.descricao == exame.descricao);

              this.exameService.salvar(this.exame).subscribe(exameCadastrado => {
                this.agendamento.exame = exameCadastrado;
              })
            }
          }
        }).catch((error) => { })
        break;
      }
    }
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