import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Estados } from "../../enums/estados";
import { Medico } from '../../modelos/medico';
import { MedicoService } from '../../services/medico.service';
import { DragulaService } from 'ng2-dragula';
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
import * as tableData from './listagem-paciente-gestante-settings';
import { ConfiguracaoAgenda } from '../../modelos/configuracaoAgenda';


@Component({
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss', '../../cadastros/cadastros.scss'],

})

export class CadastroMedicoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;
  @ViewChild('numero') private numero: ElementRef;

  settings = tableData.settings;
  source: LocalDataSource;
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
    id: "", nomeCompleto: "", cpf: "", dataNascimento: new Date('01/01/0001'), rg: "", ativo: true, genero: 1, celular: "", email: "", usuario: new Usuario(),
    cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", imagem: "", crm: "", convenios: new Array<Convenio>(), especialidade: new Especialidade(),
    configuracaoAgenda:new ConfiguracaoAgenda(true)
  };

  constructor(private medicoService: MedicoService, private especialidadeService: EspecialidadeService, private enderecoService: EnderecoService, private dragulaService: DragulaService,
    private convenioService: ConvenioService, private route: ActivatedRoute, private pacienteService: PacienteService, private router: Router, private modalService: NgbModal) {

    this.dragulaService.createGroup('CONVENIOS', {
      copy: (el, source) => {
        return source.id === 'convenios';
      },
      copyItem: (convenio: Convenio) => {
        return new Convenio(convenio.nomeConvenio, convenio.diasRetorno, convenio.id);
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'conveniosMedico';
      }
    });
  }

  public formataData(e): void {
    this.medico.dataNascimento = this.util.stringParaData(e.target.value);
  }

  public ngAfterViewInit(): void {

    this.nomeCompleto.nativeElement.focus();

  }
  public ngOnDestroy(): void {
    this.dragulaService.destroy("CONVENIOS");
  }

  public ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.medicoService.buscarPorId(id).subscribe(dado => {
        this.medico = dado;
        this.data = this.util.dataParaString(dado.dataNascimento);
        this.especialidadeSelecionada = dado.especialidade.descricao;
      });

      this.pacienteService.TodosGestantesFiltrandoMedico(id).subscribe(gestantes => {
        console.log(gestantes);
        this.pacientesGestantes = gestantes;
        this.source = new LocalDataSource(this.pacientesGestantes);
      })

      this.convenioService.TodosFiltrandoMedico(id).subscribe(dados => {
        this.convenios = dados;
      });
    }
    else {
      this.convenioService.Todos().subscribe(dados => {
        this.convenios = dados;
      });
    }
    this.especialidadeService.Todos().subscribe(c => {
      this.especialidades = c;
      this.nomeEspecialidades = new Array<string>();
      c.forEach(d => {
        this.nomeEspecialidades.push(d.descricao);
      });
    })
  }

  editarPaciente(event) {
    this.router.navigate(['/cadastros/cadastropaciente', { id: event.data.id }]);
  }

  ExibeAbaEspecialidade(especialidade: string) : boolean{
    if (this.medico != null && this.medico.especialidade.descricao != null) {
      return this.medico.especialidade.descricao.includes(especialidade);
    }
    return false;
  }

  selecionaEspecialidade(item: any) {
    var especialidade = this.especialidades.find(c => c.descricao === item.item);
    if (especialidade != null)
      this.medico.especialidade = especialidade;
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

  public onSubmit(): void {
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
