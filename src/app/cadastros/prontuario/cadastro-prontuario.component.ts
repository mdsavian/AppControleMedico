import { Component, OnInit } from '@angular/core';
// import { Prontuario } from '../../modelos/prontuario';
// import { ProntuarioService } from '../../services/prontuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalErrorComponent } from '../../shared/modal/modal-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './cadastro-prontuario.component.html',
  styleUrls: ['../../cadastros/cadastros.scss'],
})

export class CadastroProntuarioComponent implements OnInit {

  editorModel;
  
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
  

  constructor( private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  getEditorInstance(editorInstance: any) {
  }
  

  public ngOnInit(): void {
    

  }

}
