import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModeloPrescricao } from '../../modelos/modeloPrescricao';
import { ModeloPrescricaoService } from '../../services/modeloPrescricao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util'

@Component({
  templateUrl: './cadastro-modelo-prescricao.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroModeloPrescricaoComponent implements OnInit {
  @ViewChild('modalImportarArquivo', { read: TemplateRef, static: false }) modalImportarArquivo: TemplateRef<any>;

  editorModel;
  util = new Util();
  modeloPrescricao: ModeloPrescricao = new ModeloPrescricao();
  isSpinnerVisible = false;

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
    if (this.modeloPrescricaoService.modeloPrescricao != null) {
      this.modeloPrescricao = this.modeloPrescricaoService.modeloPrescricao;
      this.editorModel = this.modeloPrescricao.descricao;
    }
  }

  constructor(private route: ActivatedRoute, public router: Router, private modalService: NgbModal, private modeloPrescricaoService: ModeloPrescricaoService) {
  }



  getEditorInstance(editorInstance: any) {
  }

  salvar() {


    if (this.util.isNullOrWhitespace(this.editorModel)) {
      var modal = this.modalService.open(ModalErrorComponent, { windowClass: "modal-holder modal-error" });
      modal.componentInstance.mensagemErro = "Houve um erro. Tente novamente mais tarde.";
    }
    else {
      this.modeloPrescricao.descricao = this.editorModel;
      this.modeloPrescricaoService.salvar(this.modeloPrescricao).subscribe(c => {
        this.router.navigate(["listagem/listagemmodeloprescricao"]);
      });
    }


  }

}
