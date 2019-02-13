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
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      { path: 'relatorio', loadChildren: './relatorio/relatorio.module#RelatorioModule' },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      { path: 'forms', loadChildren: './form/forms.module#FormModule' },

      { path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule', canActivate: [AuthGuard] },
      { path: 'importador', loadChildren: './importador/importador.module#ImportadorModule', canActivate: [AuthGuard] },
      
      { path: 'tables', loadChildren: './table/tables.module#TablesModule' },
      //{ path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'extra-component',
        loadChildren:
          './extra-component/extra-component.module#ExtraComponentsModule'
      },
      { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
      {
        path: 'sample-pages',
        loadChildren: './sample-pages/sample-pages.module#SamplePagesModule'
      }
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
