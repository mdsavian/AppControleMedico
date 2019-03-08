import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './authentication/guard/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [      
      { path: 'relatorio', loadChildren: './relatorio/relatorio.module#RelatorioModule' },
      { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      { path: 'listagem', loadChildren: './listagem/listagem.module#ListagemModule', canActivate: [AuthGuard] },
      { path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule', canActivate: [AuthGuard] },
      { path: 'importador', loadChildren: './importador/importador.module#ImportadorModule', canActivate: [AuthGuard] },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
