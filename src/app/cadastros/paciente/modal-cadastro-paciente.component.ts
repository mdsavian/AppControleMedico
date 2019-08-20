import { Paciente } from '../../modelos/paciente';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';
import { Convenio } from '../../modelos/convenio';
import { ConvenioService } from '../../services/convenio.service';
import { ModalAdicionaModeloDescricaoComponent } from '../../shared/modal/modal-adiciona-modelo-descricao.component';

@Component({
  selector: 'app-modal-cadastro-paciente.component',
  templateUrl: './modal-cadastro-paciente.component.html'
})

export class ModalCadastroPacienteComponent {
  @ViewChild('nomeCompleto', { read: ElementRef }) private nomeCompleto: ElementRef;

  paciente: Paciente = new Paciente();

  util = new Util();
  convenio: Convenio;
  convenios: Array<Convenio>;
  nomeCompletoModel: string;
  dataNasci:string;

  constructor(public activeModal: NgbActiveModal, private convenioService: ConvenioService, private modalService: NgbModal) { }

  public formataData(e): void {
    if (e.target.id == "dataNascimento")
      this.paciente.dataNascimento = this.util.stringParaData(e.target.value);
  }

  adicionaConvenio() {
    var modalAdiciona = this.modalService.open(ModalAdicionaModeloDescricaoComponent);
    modalAdiciona.componentInstance.descricaoErro = "Convênio obrigatório.";
    modalAdiciona.componentInstance.labelDescricao = "Convênio";
    modalAdiciona.componentInstance.mostrarCor = false;

    modalAdiciona.result.then((convenio) => {
      if (convenio != null && convenio.descricao != '') {

        var convenioExistente = this.convenios.find(c => c.descricao == convenio.descricao);
        if (convenioExistente != null) {
          this.paciente.convenio = convenioExistente;
          this.convenio = convenioExistente;
        }
        else {

          this.convenio = new Convenio();
          this.convenio.descricao = convenio.descricao;
          this.convenios.push(this.convenio);

          this.convenioService.salvar(this.convenio).subscribe(convenioCadastrado => {
            this.paciente.convenio = convenioCadastrado;
          });

          this.convenio = this.convenios.find(c => c.descricao == convenio.descricao);
        }
      }
    }).catch((error) => { })

  }

  ngOnInit() {
    this.nomeCompleto.nativeElement.focus();
    this.convenioService.Todos().subscribe(c => this.convenios = c);
  }


  salvar() {
    this.activeModal.close(this.paciente);
  }

  fechar() {
    this.activeModal.close();
  }
}