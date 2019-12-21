import { Component, OnInit } from '@angular/core';
import { Prontuario } from '../../modelos/prontuario';
import { ProntuarioService } from '../../services/prontuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../../environments/environment';
import { Util } from '../../uteis/Util'
import { BotaoDownloadComponent } from './botao-download-component';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: './cadastro-prontuario.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroProntuarioComponent implements OnInit {

  editorModel;
  util = new Util();
  hasBaseDropZoneOver = false;
  public progress: number;
  public message: string;
  public uploader: FileUploader;
  prontuario: Prontuario;
  sourceArquivos: LocalDataSource;

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

  public ngOnInit(): void {

    if (this.util.isNullOrWhitespace(this.prontuarioService.pacienteId))
      this.router.navigate(["listagem/listagemprontuario"]);

    else {
      this.prontuarioService.buscarPorPaciente(this.prontuarioService.pacienteId).subscribe(prontuario => {
        this.prontuarioService.prontuario = prontuario;
        this.prontuario = prontuario;
        this.editorModel = prontuario.descricao;

        if (this.util.hasItems(this.prontuario.anexos))
          this.sourceArquivos = new LocalDataSource(this.prontuario.anexos);
      });
    }
  }

  constructor(private route: ActivatedRoute, public router: Router, private modalService: NgbModal, private prontuarioService: ProntuarioService) {
    this.uploader = new FileUploader({
      url: environment.apiUrl + 'prontuario/salvarArquivos/',
      method: 'post',
      itemAlias: 'pacienteId=' + this.prontuarioService.pacienteId
    });


    this.uploader.onCompleteAll = () => {
      this.prontuarioService.buscarPorId(this.prontuario.id).subscribe(prontuario => {
        this.prontuario = prontuario;
        if (this.util.hasItems(this.prontuario.anexos))
          this.sourceArquivos = new LocalDataSource(this.prontuario.anexos);
      });
    }
  }

  getEditorInstance(editorInstance: any) {
  }

  validarSalvar() {

    var validou = true;

    if (this.util.isNullOrWhitespace(this.prontuarioService.pacienteId)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
      validou = false;
    }
    else if (this.uploader.getNotUploadedItems().length > 0) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Existem arquivos anexados que não foram salvos. É necessário que seja feito o upload dos arquivos para prosseguir com o cadastro.";
      validou = false;
    }

    return validou;

  }

  salvar() {
    if (this.validarSalvar()) {
      this.prontuario.descricao = this.editorModel;
      this.prontuarioService.salvar(this.prontuario).subscribe(c => {
        this.router.navigate(["listagem/listagempaciente"]);

      });

    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;

  }

  settingsArquivos = {
    mode: 'external',
    noDataMessage: "Não foi encontrado nenhum arquivo",
    columns: {
      nomeArquivo: {
        title: 'Nome',
        filter: true
      },
      extensaoArquivo: {
        title: 'Extensão',
        filter: true
      },
      id: {
        title: "Download",
        type: "custom",
        filter: false,
        renderComponent: BotaoDownloadComponent,
      }
    },
    actions:
    {
      columnTitle: '',
      delete: true,
      edit: false
    },
    add:
    {
      addButtonContent: 'Importar Novo Arquivo'
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
  };

}
