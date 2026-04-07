import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layout/componentes/componentes/principal-component/principal-component';

const routes: Routes = [

  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home/home-module')
            .then(m => m.HomeModule)
      },
      {
        path: 'eventos',
        loadChildren: () =>
          import('./features/eventos/eventos/eventos-module')
            .then(m => m.EventosModule)
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('./features/contacto/contacto/contacto-module')
            .then(m => m.ContactoModule)
      },
      {
        path: 'favoritos',
        loadChildren: () =>
          import('./features/favoritos/favoritos/favoritos-module')
            .then(m => m.FavoritosModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }