import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Procedimento } from '../../modelos/procedimento';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from '../../services/agendamento.service';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { forkJoin } from 'rxjs';
import { Agendamento } from '../../modelos/agendamento';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../modelos/paciente';

@Component({
  templateUrl: './listagem-procedimentos-realizados.component.html'
})
export class ListagemProcedimentosRealizadosComponent implements OnInit {
  source: LocalDataSource;
  listaProcedimentos: Array<Procedimento>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  dataHoje = new Date();
  dataInicial = this.util.dataParaString(new Date());
  dataFinal = this.util.dataParaString(new Date());
  medicos: Array<Medico> = new Array<Medico>();
  medico: Medico = new Medico();
  procedimentos: Array<Agendamento>;

  constructor(private pacienteService: PacienteService,
    private medicoService: MedicoService, private agendamentoService: AgendamentoService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    var seteDiasAtras = this.dataHoje;
    seteDiasAtras.setDate(seteDiasAtras.getDate() - 7);
    this.dataInicial = this.util.dataParaString(seteDiasAtras);

    this.buscarModelos().subscribe(c => {
      this.isSpinnerVisible = false;
    });
  }

  buscarModelos() {

    this.isSpinnerVisible = true;

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(dados => {
      if (dados.length > 1) {
        let medicoTodos = new Medico();
        medicoTodos.nomeCompleto = "Todos";
        medicoTodos.id = "";
        this.medicos.push(medicoTodos);

        this.medicos = this.medicos.concat(dados);

        if (this.medico == null)
          this.medico = this.medicos.find(c => c == medicoTodos);
        else
          this.medico = this.medicos.find(c => c.id == this.medico.id);
      }
      else
        this.medico = this.medicos.find(c => true);

    });
    let reqProcedimentos = this.agendamentoService.procedimentosRealizados(this.dataInicial, this.dataFinal, this.medico.id).map(procedimentos => {
      this.procedimentos = procedimentos;
      this.source = new LocalDataSource(this.procedimentos);
    });

    return forkJoin(reqMedicos, reqProcedimentos);
  }

  buscar() {
    let retorno = false;

    //transforma 01112019 para 01/11/2019
    var dataInicioBusca = this.util.formatarData(this.dataInicial);
    var dataFimBusca = this.util.formatarData(this.dataFinal);

    if (!this.util.validaData(dataInicioBusca) || !this.util.validaData(dataFimBusca) || this.util.stringParaData(dataInicioBusca) > this.util.stringParaData(dataFimBusca)) {
      var modalErro = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modalErro.componentInstance.mensagemErro = "Data inválida.";
      retorno = true;
    }

    if (!retorno) {
      this.isSpinnerVisible = true;

      this.agendamentoService.procedimentosRealizados(dataInicioBusca, dataFimBusca, this.medico.id).subscribe(procedimentos => {
        this.procedimentos = procedimentos;
        this.source = new LocalDataSource(this.procedimentos);
        this.isSpinnerVisible = false;
      });
    }
  }

  public formataData(e): void {
    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);

    if (e.target.id == "dataInicio") {
      this.dataInicial = dataFormatada;
    }
    if (e.target.id == "dataFim") {
      this.dataFinal = dataFormatada;
    }
  }

  editarRegistro(event) {

    this.router.navigate(['/cadastros/cadastroprocedimento']);
  }

  settings = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum registro",
    columns: {
      dataAgendamento: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (dataAgendamento) => { return this.util.dataParaString(dataAgendamento) }
      },
      medicoId: {
        title: 'Médico',
        valuePrepareFunction: (medicoId) => { return this.medicos.find(c => c.id == medicoId).nomeCompleto }

      },
      paciente: {
        title: 'Paciente',
        filter: true,
        valuePrepareFunction: (paciente) =>{ return paciente != null ? paciente.nomeCompleto : ""}
      },
      tipoAgendamentoDescricao: {
        title: 'Procedimento',
        filter: true        
      }
    },
    actions:
    {
      columnTitle: '',
      add: false,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
  };

}


