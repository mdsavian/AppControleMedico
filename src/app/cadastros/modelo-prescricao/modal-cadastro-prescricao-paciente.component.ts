import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util'
import { PrescricaoPaciente } from '../../modelos/prescricaoPaciente';
import { Paciente } from '../../modelos/paciente';
import { PacienteService } from '../../services/paciente.service';
import { PrescricaoPacienteService } from '../../services/prescricaoPaciente.service';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../modelos/medico';
import { AppService } from '../../services/app.service';
import { ModeloPrescricao } from '../../modelos/modeloPrescricao';
import { ModeloPrescricaoService } from '../../services/modeloPrescricao.service';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './modal-cadastro-prescricao-paciente.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class ModalCadastroPrescricaoPacienteComponent implements OnInit, AfterViewChecked {
  @ViewChild('medico', { read: ElementRef, static: false }) private medicoModel: ElementRef;


  editorModel;
  util = new Util();
  prescricaoPaciente = new PrescricaoPaciente();
  paciente: Paciente;
  isSpinnerVisible = false;
  medicos = new Array<Medico>();
  modelos = new Array<ModeloPrescricao>();
  editando = false;
  modeloPrescricao = new ModeloPrescricao();
  medico = new Medico();
  constructor(private modeloPrescricaoService: ModeloPrescricaoService, private appService: AppService,
    private medicoService: MedicoService, public router: Router, private modalService: NgbModal, private activeModal: NgbActiveModal, 
    private prescricaoPacienteService: PrescricaoPacienteService) {
  }

  customToolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      //['link', 'image', 'video']                          link and image, video
    ]
  };


  ngAfterViewChecked(): void {

    if (this.medicoModel != null) {
      if (this.editando) {
        this.medicoModel.nativeElement.setAttribute('readonly', true);
      }

      if (!this.util.isNullOrWhitespace(this.medico.id)) {
        this.prescricaoPaciente.medicoId = this.medico.id;
        this.medicoModel.nativeElement.setAttribute('readonly', true);
      }
    }
  }

  public ngOnInit(): void {
    this.isSpinnerVisible = true;

    this.alimentarModelos().subscribe(c => { this.isSpinnerVisible = false; });

    if (this.prescricaoPaciente != null) {
      this.prescricaoPaciente = this.prescricaoPaciente;
      this.editorModel = this.prescricaoPaciente.descricao;
    }

    if (this.paciente != null) {
      this.prescricaoPaciente.pacienteId = this.paciente.id;
    }

    this.prescricaoPaciente.data = new Date();
    this.prescricaoPaciente.usuarioId = this.appService.retornarUsuarioCorrente().id;

  }

  selecionaModelo(id: string) {
    this.modeloPrescricao = this.modelos.find(c => c.id == id);
    this.editorModel = this.modeloPrescricao.descricao;
  }

  imprimir() {
    if (this.util.isNullOrWhitespace(this.editorModel)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Descrição da Prescrição é obrigatória.";
    }
    else {
      let popupWinindow;
      popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + this.editorModel + '</html>');
      popupWinindow.document.close();
      this.salvar();
    }
  }
  fechar() {
    this.activeModal.close(null);
  }
  alimentarModelos() {
    let requisicoes = [];

    let reqMedicos = this.medicoService.buscarMedicosPorUsuario().map(c => {
      this.medicos = c;
    });
    requisicoes.push(reqMedicos);

    let reqModelos = this.modeloPrescricaoService.Todos().map(modelos => {

      this.modelos = modelos;

      this.modeloPrescricao = new ModeloPrescricao();
      this.modeloPrescricao.titulo = "";
      this.modeloPrescricao.descricao = "";
      this.modeloPrescricao.id = "";
      this.modelos.push(this.modeloPrescricao);
    });

    requisicoes.push(reqModelos);

    return forkJoin(requisicoes);
  }

  getEditorInstance(editorInstance: any) {
  }

  salvar() {

    if (this.util.isNullOrWhitespace(this.editorModel)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Descrição da Prescrição é obrigatória.";
    }
    else {
      this.prescricaoPaciente.descricao = this.editorModel;
      this.prescricaoPacienteService.salvar(this.prescricaoPaciente).subscribe(c => {
        this.activeModal.close(c);
      });
    }


  }

}
