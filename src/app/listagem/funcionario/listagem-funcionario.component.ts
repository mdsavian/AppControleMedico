import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../modelos/funcionario';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { AgendamentoService } from '../../services/agendamento.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelos/usuario';
import { ModalExcluirRegistroComponent } from '../../shared/modal/modal-excluir-registro.component';
import { AppService } from '../../services/app.service';

@Component({
  templateUrl: './listagem-funcionario.component.html'
})
export class ListagemFuncionarioComponent implements OnInit{
  source: LocalDataSource;
  listaFuncionarios: Array<Funcionario>;
  public isSpinnerVisible = false;
  closeResult: string;
  util = new Util();
  usuarios:Array<Usuario>;  
  
  constructor(private appService:AppService, private funcionarioService: FuncionarioService, private usuarioService:UsuarioService, private agendamentoService:AgendamentoService,private router: Router, private modalService: NgbModal) {
    this.isSpinnerVisible = true;
    
  }

  buscaFuncionarios(): void {
    this.funcionarioService.Todos().subscribe(dados => {
      this.isSpinnerVisible = false;
      this.listaFuncionarios = dados;
      this.source = new LocalDataSource(this.listaFuncionarios);
    });
  }

  public ngOnInit(): void {
    this.buscaFuncionarios();        
    this.usuarioService.todos().subscribe(c=> {
      this.usuarioService.listaUsuario = c;
      this.usuarios = c;     
    });
  }


  deletarRegistro(event) {
    this.agendamentoService.buscarAgendamentosFuncionario(event.data.id).subscribe(agendamentos => {
      if (this.util.hasItems(agendamentos)) {
        var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
        modal.componentInstance.mensagemErro = "Não é possível excluir funcionário vínculado a agendamento(s).";
      }
      else {
        this.modalService.open(ModalExcluirRegistroComponent).result.then(
          result => {
            if (result == 'Sim') {
              this.funcionarioService.Excluir(event.data.id).subscribe(retorno => {
                if (retorno) {
                  this.buscaFuncionarios();
                }
              });
            }
          }
        );
      }
    }); 
  }

  editarRegistro(event) {
    this.usuarioService.usuarioParaValidacao = this.usuarios.find(c=> c.funcionarioId == event.data.id);
    this.funcionarioService.funcionario = this.listaFuncionarios.find(c=> c.id == event.data.id);
      this.router.navigate(['/cadastros/cadastrofuncionario']);
    }

  criarRegistro(event) {
    this.usuarioService.usuarioParaValidacao = this.funcionarioService.funcionario = null;
      this.router.navigate(['/cadastros/cadastrofuncionario']);
    }


   settings = {
      mode:'external',
      noDataMessage:"Não foi encontrado nenhum registro",
      columns: {
        nomeCompleto: {
          title: 'Nome',
          filter: true
        },   
        dataAdmissao: {
          title: 'Data De Admissão',
          filter: false,
          valuePrepareFunction: (data) => {this.util.dataParaString(data) }
        },
        dataDemissao: {
          title: 'Data De Admissão',
          filter: false,
          valuePrepareFunction: (data) => {this.util.dataParaString(data) }
        },    
        ativo: {
          title: 'Ativo',
          filter: false,
          valuePrepareFunction: (valor) => { return valor === true ? 'Sim' : 'false' }
        }
    
      },  
      actions:
      {
        columnTitle:'',
        add: this.util.retornaUsuarioAdmOuMedico(this.appService.retornarUsuarioCorrente()),
        delete: this.util.retornaUsuarioAdmOuMedico(this.appService.retornarUsuarioCorrente()),
      },
      delete: {
        deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>'
      },
      edit: {
        editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
      },
      add:
      {
        addButtonContent: 'Novo'
      }
    };
}


