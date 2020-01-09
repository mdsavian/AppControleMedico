import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../uteis/Util';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isSpinnerVisible = false;
  util = new Util();

  constructor(private router: Router, private modalService: NgbModal) {

    this.isSpinnerVisible = true;
  }







}


