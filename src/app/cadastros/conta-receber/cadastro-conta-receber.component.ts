import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ContaReceber } from '../../modelos/contaReceber';
import { ContaReceberService } from '../../services/contaReceber.service';
import { PacienteService } from '../../services/paciente.service';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estados } from "../../enums/estados";
import { Paises } from "../../enums/paises";
import { Paciente } from '../../modelos/paciente';
import { Observable } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { distinctUntilChanged, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Util } from '../../uteis/Util';
import { ETipoContaReceber } from '../../enums/ETipoContaReceber';
import { ModalCadastroPacienteComponent } from '../paciente/modal-cadastro-paciente.component';
import { AppService } from '../../services/app.service';
import { ModalPagamentoComponent } from '../../shared/modal/modal-pagamento.component';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { ContaReceberPagamento } from '../../modelos/contaReceberPagamento';
import { FormaDePagamentoService } from '../../services/forma-de-pagamento.service';
import { FormaDePagamento } from '../../modelos/formaDePagamento';
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
@Component({
  templateUrl: './cadastro-conta-receber.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroContaReceberComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('pacienteModel', { read: ElementRef, static: false }) private pacienteModel: ElementRef;
  @ViewChild('tipoContaModel', { read: ElementRef, static: false }) private tipoContaModel: ElementRef;
  @ViewChild('valor', { read: ElementRef, static: false }) private valor: ElementRef;
  @ViewChild('saldo', { read: ElementRef, static: false }) private saldo: ElementRef;
  @ViewChild('valorTotal', { read: ElementRef, static: false }) private valorTotal: ElementRef;
  @ViewChild('jurosMulta', { read: ElementRef, static: false }) private jurosMulta: ElementRef;
  @ViewChild('desconto', { read: ElementRef, static: false }) private desconto: ElementRef;
  @ViewChild('numeroDocumento', { read: ElementRef, static: false }) private numeroDocumento: ElementRef;
  @ViewChild('numeroFatura', { read: ElementRef, static: false }) private numeroFatura: ElementRef;
  @ViewChild('medico', { read: ElementRef, static: false }) private medicoModel: ElementRef;

  sourcePagamentos: LocalDataSource;
  mensagemErro: string;
  contaDeAgendamento: boolean;
  util = new Util();
  dataEmi = this.util.dataParaString(new Date());
  dataVenc: string;
  id: string;
  formaDePagamentos = new Array<FormaDePagamento>();
  contaReceber = new ContaReceber();
  tipoConta = ETipoContaReceber[1].toString();
  estados = Estados;
  paises = Paises;
  pacienteSelecionado: string;
  nomePacientes: Array<string>;
  pacientees: Array<Paciente> = [];
  paciente: Paciente;
  falhaNaBusca: boolean;
  tiposConta = ETipoContaReceber;
  medicos: Array<Medico> = new Array<Medico>();
  medicoSelecionado: Medico;

  constructor(private pacienteService: PacienteService,private medicoService: MedicoService, private formaPagamentoService: FormaDePagamentoService, private appService: AppService, private contaReceberService: ContaReceberService, private route: ActivatedRoute, private enderecoService: EnderecoService, private router: Router, private modalService: NgbModal) {
  }

  ngAfterViewInit(): void {
    this.medicoService.todos().subscribe(medicos => {
      this.medicos = medicos;
      if (this.util.isNullOrWhitespace(this.contaReceber.medicoId)) {
        let medicoTodos = new Medico();
        medicoTodos.nomeCompleto = "Todos";
        medicoTodos.id = "";
        this.medicos.push(medicoTodos);

        this.contaReceber.medicoId = this.medicos.find(c => c == medicoTodos).id;
      }
      else if (this.medicoModel != null)
        this.medicoModel.nativeElement.setAttribute('readonly', true);
    });

    this.pacienteService.Todos().subscribe(fornec => {
      this.pacientees = fornec;

      if (!this.util.isNullOrWhitespace(this.contaReceber.pacienteId))
        this.pacienteSelecionado = this.pacientees.find(c => c.id == this.contaReceber.pacienteId).nomeCompleto;

      this.nomePacientes = new Array<string>();
      this.pacientees.forEach(d => {
        this.nomePacientes.push(d.nomeCompleto);
      });
    });

    if (this.pacienteModel != null) {
      this.pacienteModel.nativeElement.focus();
    }

    if (this.contaReceberService.contaReceber != null) {
      if (this.pacienteModel != null)
        this.pacienteModel.nativeElement.setAttribute('readonly', true);

      if (this.valor != null && this.util.hasItems(this.contaReceber.pagamentos))
        this.valor.nativeElement.setAttribute('readonly', true);

      if (this.numeroDocumento != null && !this.util.isNullOrWhitespace(this.contaReceber.numeroDocumento))
        this.numeroDocumento.nativeElement.setAttribute('readonly', true);

      if (this.numeroFatura != null && this.contaReceber.numeroFatura > 0)
        this.numeroFatura.nativeElement.setAttribute('readonly', true);
    }
  }

  public ngOnInit(): void {

    this.formaPagamentoService.Todos().subscribe(formas => {
      if (this.contaReceberService.contaReceber != null && this.util.hasItems(this.contaReceber.pagamentos)) {
        this.sourcePagamentos = new LocalDataSource(this.contaReceber.pagamentos);
      }
      this.formaDePagamentos = formas;
    });

    if (this.contaReceberService.contaReceber != null) {
      this.contaReceber = this.contaReceberService.contaReceber;
      this.dataEmi = this.util.dataParaString(this.contaReceber.dataEmissao);
      this.dataVenc = this.util.dataParaString(this.contaReceber.dataVencimento);
      this.contaDeAgendamento = !this.util.isNullOrWhitespace(this.contaReceber.agendamentoId);


    }
    else {
      this.contaReceber.tipoContaReceber = ETipoContaReceber["Lançamento Manual"];
      this.contaReceber.tipoContaDescricao = "Lançamento Manual";
      this.contaReceber.usuarioId = this.appService.retornarUsuarioCorrente().id;
      this.contaReceber.clinicaId = this.appService.retornarClinicaCorrente().id;
      this.contaReceber.tipoContaReceber = ETipoContaReceber["Lançamento Manual"];
      this.contaReceber.dataEmissao = new Date();
    }
  }

  ngAfterViewChecked(): void {

    if (this.valorTotal != null)
      this.valorTotal.nativeElement.value = this.util.formatarDecimalBlur(this.valorTotal.nativeElement.value);

    if (this.saldo != null)
      this.saldo.nativeElement.value = this.util.formatarDecimalBlur(this.saldo.nativeElement.value);

    if (this.valor != null) {
      if (this.util.hasItems(this.contaReceber.pagamentos))
        this.valor.nativeElement.setAttribute('readonly', true);
    }

    if (this.desconto != null) {
      if (this.util.hasItems(this.contaReceber.pagamentos))
        this.desconto.nativeElement.setAttribute('readonly', true);
    }

    if (this.jurosMulta != null) {
      if (this.util.hasItems(this.contaReceber.pagamentos))
        this.jurosMulta.nativeElement.setAttribute('readonly', true);
    }

  }

  calcularSaldo() {
    if (this.util.hasItems(this.contaReceber.pagamentos)) {
      var pagamentos = 0;

      this.contaReceber.pagamentos.forEach(pagamento => {

        let val = pagamento.valor * pagamento.parcela;
        pagamentos = +pagamentos + +val;
      });

      var saldo = this.contaReceber.valorTotal - pagamentos;
      this.contaReceber.saldo = parseFloat(saldo.toFixed(2));
    }
    else
      this.contaReceber.saldo = this.contaReceber.valorTotal;
  }

  buscaPaciente = (text$: Observable<string>) =>
    text$.pipe(
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
        return this.nomePacientes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  calcularJurosDesconto(valor: number, operacao: string) {
    var valorTot = this.contaReceber.valor;
    if (valorTot == null)
      return;

    if (valorTot > 0) {
      if (operacao == "desconto" || (this.contaReceber.desconto != null && this.contaReceber.desconto > 0)) {
        let valorDesconto = valor;
        if (this.contaReceber.desconto != null && this.contaReceber.desconto > 0)
          valorDesconto = this.contaReceber.desconto;
        valorTot = +valorTot + -valorDesconto;
      }

      if (operacao == "juros" || (this.contaReceber.jurosMulta != null && this.contaReceber.jurosMulta > 0)) {
        let valorJuros = valor;
        if (this.contaReceber.jurosMulta != null && this.contaReceber.jurosMulta > 0)
          valorJuros = this.contaReceber.jurosMulta;
        valorTot = +valorTot + +valorJuros;
      }
    }

    this.contaReceber.valorTotal = parseFloat(valorTot.toString());
    this.calcularSaldo();

  }

  selecionaPaciente(item) {
    var paciente = this.pacientees.find(c => c.nomeCompleto === item.item);
    if (paciente != null) {
      this.paciente = paciente;
      this.contaReceber.pacienteId = paciente.id;
    }
  }

  public formataData(e): void {
    var dataFormatada = "";

    if (!this.util.isNullOrWhitespace(e.target.value))
      dataFormatada = this.util.formatarDataBlur(e.target.value);
      
    if (e.target.id == "dataVencimento") {
      this.dataVenc = dataFormatada;
      this.contaReceber.dataVencimento = this.util.stringParaData(dataFormatada);
    }
    if (e.target.id == "dataEmissao") {
      this.dataEmi = dataFormatada;
      this.contaReceber.dataEmissao = this.util.stringParaData(dataFormatada);
    }
  }

  adicionarPagamento() {
    if (this.contaDeAgendamento) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Operação não permitida para conta a receber de agendamento.";
    }
    else {
      var modalPagamento = this.modalService.open(ModalPagamentoComponent, { size: "lg" });
      modalPagamento.componentInstance.saldo = this.contaReceber.saldo;
      modalPagamento.result.then(pagamento => {
        if (pagamento != null) {
          var contaPagamento = new ContaReceberPagamento();
          contaPagamento.dataPagamento = pagamento.dataPagamento;
          contaPagamento.valor = pagamento.valor;
          contaPagamento.formaPagamentoId = pagamento.formaPagamentoId;
          contaPagamento.usuarioId = pagamento.usuarioId;
          contaPagamento.vistaPrazo = pagamento.vistaPrazo;
          contaPagamento.parcela = pagamento.parcela;
          contaPagamento.descricaoPagamento = pagamento.descricaoPagamento;

          if (!this.util.hasItems(this.contaReceber.pagamentos)) {
            this.contaReceber.pagamentos = new Array<ContaReceberPagamento>();
            contaPagamento.codigo = 1;
          }
          else
            contaPagamento.codigo = this.contaReceber.pagamentos.length + 1;

          this.contaReceber.pagamentos.push(contaPagamento);
          this.sourcePagamentos = new LocalDataSource(this.contaReceber.pagamentos);
          this.calcularSaldo();
        }
      }, error => { });
    }
  }

  formatarDecimal(e: any) {

    if (e.target.id == "valor")
      this.valor.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
    if (e.target.id == "desconto")
      this.desconto.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
    if (e.target.id == "jurosMulta")
      this.jurosMulta.nativeElement.value = this.util.formatarDecimalBlur(e.target.value);
  }

  adicionaPaciente() {
    var modalNovoPaciente = this.modalService.open(ModalCadastroPacienteComponent, { size: 'lg' });

    modalNovoPaciente.result.then((paciente: Paciente) => {
      if (paciente != null && paciente.nomeCompleto != '') {
        var pacienteExistente = this.pacientees.find(c => c.nomeCompleto == paciente.nomeCompleto || c.cpfCnpj == paciente.cpfCnpj);
        if (pacienteExistente != null) {
          this.pacienteSelecionado = pacienteExistente.nomeCompleto;
          this.contaReceber.pacienteId = pacienteExistente.id;
          this.falhaNaBusca = false;
        }
        else {
          this.pacientees.push(paciente);
          this.nomePacientes.push(paciente.nomeCompleto);
          this.pacienteSelecionado = paciente.nomeCompleto;
          this.falhaNaBusca = false;

          this.pacienteService.salvar(paciente).subscribe(pacienteCadastrado => {
            this.contaReceber.pacienteId = pacienteCadastrado.id;
          });
        }
      }
    }).catch((error) => { })

  }

  deletarPagamento(event: any) {
    if (this.contaDeAgendamento) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Operação não permitida para conta a receber de agendamento.";
    }
    else {
      this.modalService.open(ModalExcluirRegistroComponent).result.then(
        result => {
          if (result == 'Sim') {
            var index = this.contaReceber.pagamentos.indexOf(event.data.codigo);
            this.contaReceber.pagamentos.splice(index, 1);
            this.sourcePagamentos = new LocalDataSource(this.contaReceber.pagamentos);
            this.calcularSaldo();
          }
        }
      );
    }
  }

  public salvar(): void {
    this.contaReceberService.contaReceber = null;
    if (this.validar()) {
      this.contaReceberService.salvar(this.contaReceber).subscribe(
        data => {
          this.router.navigate(["listagem/listagemcontareceber"]);
        },
        error => {
          var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
          modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";

        }
      );
    }
  }

  public validar(): boolean {

    if (this.contaReceber.dataEmissao > this.contaReceber.dataVencimento) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Data de vencimento menor do que data de emissão.";
      return false;
    }
    else if (this.contaReceber.desconto > (this.contaReceber.valor + this.contaReceber.jurosMulta)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Desconto maior do que valor total";
      return false;
    }
    else if (this.util.hasItems(this.contaReceber.pagamentos)) {
      let soma = 0;
      this.contaReceber.pagamentos.forEach(pag => soma = +soma + +(pag.valor * pag.parcela));
      if (soma > this.contaReceber.valorTotal) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Soma dos pagamentos maior do que valor total";
        return false;
      }
    }
    return true;
  }

  settingsPagamentos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum pagamento",
    columns: {
      dataPagamento: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (dataPagamento) => {
          return this.util.dataParaString(dataPagamento);;
        }
      },
      formaPagamentoId: {
        title: 'Forma Pagamento',
        filter: true,
        valuePrepareFunction: (formaPagamentoId) => {
          return formaPagamentoId == null || !this.util.hasItems(this.formaDePagamentos) ? "" : this.formaDePagamentos.find(c => c.id == formaPagamentoId).descricao;
        }
      },
      parcela: {
        title: 'Parcela',
        filter: false
      },
      valor: {
        title: 'Valor',
        filter: false,
        valuePrepareFunction: (valor) => {
          return this.util.formatarDecimal(valor);
        }
      }
    },
    actions:
    {
      edit: false,
      columnTitle: '  '
    },
    delete:
    {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
    add:
    {
      addButtonContent: 'Adicionar Pagamento'
    }
  };
}


