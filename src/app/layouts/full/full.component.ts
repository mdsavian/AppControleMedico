import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  color = 'bluedark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  showHorizontalNav = true;
  showBoxedtheme = true;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['../authentication/login']);
    }
  }
}
