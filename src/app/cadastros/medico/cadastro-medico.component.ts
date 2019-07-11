import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ConvenioService } from '../../services/convenio.service';
import { Convenio } from '../../modelos/convenio';
import { Especialidade } from '../../modelos/especialidade';
import { Util } from '../../uteis/Util';
import { EnderecoService } from '../../services/endereco.service';
import { Usuario } from '../../modelos/usuario';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EspecialidadeService } from '../../services/especialidade.service';
import { Paciente } from '../../modelos/paciente';
import { PacienteService } from '../../services/paciente.service';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableDataGestantes from './listagem-paciente-gestante-settings';
import * as tableDataConvenio from './listagem-convenio-medico-settings';
import { ConfiguracaoAgenda } from '../../modelos/configuracaoAgenda';
import { ModalAlteraSenhaComponent } from '../../shared/modal/modal-altera-senha.component';
import { ModalSucessoComponent } from '../../shared/modal/modal-sucesso.component';
import { UsuarioService } from '../../services/usuario.service';
import { LoginService } from '../../services/login.service';
import { Clinica } from '../../modelos/clinica';
import { ModalAdicionaConvenioComponent } from '../convenio/modal-adiciona-convenio.component';

@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss', '../../cadastros/cadastros.scss']
})

export class CadastroMedicoComponent implements OnInit, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  settingsGestante = tableDataGestantes.settingsGestante;
  settingsConvenio = tableDataConvenio.settingsConvenio;
  sourceGestante: LocalDataSource;
  sourceConvenio: LocalDataSource;
  estados = Estados;
  especialidades = new Array<Especialidade>();
  nomeEspecialidades: Array<string>;
  falhaNaBusca: boolean;
  especialidadeSelecionada: string;
  pacientesGestantes: Array<Paciente>;
  data: string = "01/01/1901"
  util = new Util();
  convenios: Array<Convenio> = [];
  medico: Medico = {
    clinicasId: new Array<string>(), clinicas: new Array<Clinica>(), usuarioId: "", configuracaoAgendaId: "", conveniosId: new Array<string>(),
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "", usuario: new Usuario(),
    administrador: false, cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm: "", convenios: new Array<Convenio>(), especialidade: new Especialidade(), especialidadeId: "",
    configuracaoAgenda: new ConfiguracaoAgenda()
  };
  usuario: Usuario;
  usuarioAdministrador = false;
  permiteAlterarSenha = false;
  convenioModel: Convenio;

  constructor(private loginService: LoginService, private usuarioService: UsuarioService, private medicoService: MedicoService, private especialidadeService: EspecialidadeService, private enderecoService: EnderecoService,
    private convenioService: ConvenioService, private pacienteService: PacienteService, private router: Router, private modalService: NgbModal) {
  }


  public ngOnInit(): void {

    this.usuario = this.util.retornarUsuarioCorrente();
    this.usuarioAdministrador = this.util.retornarUsuarioAdministrador();

    if (this.medicoService.medico != null) {
      this.medico = this.medicoService.medico;
      this.data = this.util.dataParaString(this.medico.dataNascimento);

      this.permiteAlterarSenha = this.usuario.medicoId == this.medico.id;

      this.pacienteService.TodosGestantesFiltrandoMedico(this.medico.id).subscribe(gestantes => {
        this.pacientesGestantes = gestantes;
        this.sourceGestante = new LocalDataSource(this.pacientesGestantes);
      });
    }

    this.alimentarConvenioEEspecialidade();
  }

  private alimentarConvenioEEspecialidade() {
    
    this.convenioService.Todos().subscribe(dados => {         

      if (this.medico != null && this.util.hasItems(this.medico.conveniosId)) {
        if (this.medico.convenios == null)
            this.medico.convenios = new Array<Convenio>();
        
        dados.forEach(conv => {          

          var indexConvenio = this.medico.conveniosId.indexOf(conv.id);

          if (indexConvenio >= 0) {
            this.medico.convenios.push(conv);    
          }
          else
          {
            this.convenios.push(conv);
          }
                    
        });        

        if (this.util.hasItems(this.medico.convenios))
          this.sourceConvenio = new LocalDataSource(this.medico.convenios);
      }
      else
        this.convenios = dados;

      if (this.util.hasItems(this.convenios))
        this.convenioModel = this.convenios.find(c => true);
    });

    this.especialidadeService.Todos().subscribe(c => {
      this.especialidades = c;

      this.nomeEspecialidades = new Array<string>();
      c.forEach(d => {
        this.nomeEspecialidades.push(d.descricao);
      });

      if (!this.util.isNullOrWhitespace(this.medico.especialidadeId)) {
        this.medico.especialidade = this.especialidades.find(c => c.id == this.medico.especialidadeId);
        this.especialidadeSelecionada = this.nomeEspecialidades.find(c => c === this.medico.especialidade.descricao);
      }
    });
  }
  public formataData(e): void {
    this.medico.dataNascimento = this.util.stringParaData(e.target.value);
  }

  configurarAgendaMedico() {
    if (this.medico.id != ''){
      this.medicoService.medico = this.medico;
      this.router.navigate(['/cadastros/configuracaoagenda']);
    }
  }

  public adicionaConvenio() {
    var modal = this.modalService.open(ModalAdicionaConvenioComponent, { windowClass: "modal-holder" });

    modal.result.then((convenio) => {
      this.convenioModel = convenio;
      this.associarConvenioMedico();
    }, error=>{});

  }

  associarConvenioMedico() {

    if (this.convenioModel == null)
      return;

    if (this.medico.conveniosId == null)
      this.medico.conveniosId = new Array<string>();

    if (this.medico.convenios == null)
      this.medico.convenios = new Array<Convenio>();

    if (this.medico.convenios.find(c => c.id == this.convenioModel.id) != null)
      return;

    this.medico.conveniosId.push(this.convenioModel.id);
    this.medico.convenios.push(this.convenioModel);

    var index = this.convenios.indexOf(this.convenioModel);

    this.convenios.splice(index, 1);
    this.convenioModel = this.convenios.find(c => true);
    this.sourceConvenio = new LocalDataSource(this.medico.convenios);

    if (!this.util.isNullOrWhitespace(this.medico.id)) {
      this.medicoService.salvar(this.medico).subscribe(medico => {
        this.medico = medico;
      });
    }
  }

  alterarSenhaMedico() {

    if (this.permiteAlterarSenha) {
      var modal = this.modalService.open(ModalAlteraSenhaComponent, { windowClass: "modal-holder" });

      modal.result.then((alteraSenha) => {
        alteraSenha.usuarioId = this.usuario.id;
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


  public ngAfterViewInit(): void {
    this.nomeCompleto.nativeElement.focus();
  }

  editarPaciente(event) {
    this.router.navigate(['/cadastros/cadastropaciente', { id: event.data.id }]);
  }

  ExibeAbaEspecialidade(especialidade: string): boolean {
    if (this.medico != null && this.medico.especialidade != null && this.medico.especialidade.descricao != null) {
      return this.medico.especialidade.descricao.includes(especialidade);
    }
    return false;
  }

  selecionaEspecialidade(item: any) {
    var especialidade = this.especialidades.find(c => c.descricao === item.item);
    if (especialidade != null) {
      this.medico.especialidadeId = especialidade.id;
      this.medico.especialidade = especialidade;

    }
  }


  buscaEspecialidade = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        this.falhaNaBusca = this.nomeEspecialidades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).length == 0;
        return term.length < 2 ? []
          : this.nomeEspecialidades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    )

  public buscaCep() {
    if (this.medico.cep != "") {
      this.enderecoService.buscarEndereco(this.medico.cep).subscribe(c => {

        this.medico.cep = c.cep;
        this.medico.bairro = c.bairro;
        this.medico.endereco = c.rua;
        this.medico.complemento = c.complemento;
        this.medico.uf = c.uf;
        this.medico.cidade = c.cidade;

        this.numero.nativeElement.focus();
      });
    }
  }

  public salvar(): void {
    this.medicoService.salvar(this.medico).subscribe(
      data => {
        this.router.navigate(["listagem/listagemmedico"]);
      },
      error => {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      }
    )
  }
}
