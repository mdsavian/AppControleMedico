import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';



export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: '',
          urls: [
            { title: '' }
          ] 
        }
      }
    ]
  }
];
