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
      { path: 'relatorio', loadChildren: () => import('./relatorio/relatorio.module').then(m => m.RelatorioModule), canActivate: [AuthGuard]},
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'listagem', loadChildren: () => import('./listagem/listagem.module').then(m =>  m.ListagemModule), canActivate: [AuthGuard] },
      { path: 'cadastros', loadChildren: () => import('./cadastros/cadastros.module').then(m =>  m.CadastrosModule), canActivate: [AuthGuard] },
      { path: 'importador', loadChildren: () => import('./importador/importador.module').then(m =>  m.ImportadorModule), canActivate: [AuthGuard] },
      { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule), canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
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
export class AppRoutingModule { }
