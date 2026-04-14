import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from '../eventos-component/eventos-component/eventos-component';
import { DetalleEventoComponent } from '../detalle-evento-component/detalle-evento-component';
import { CrearEventoComponent } from '../crear-evento-component/crear-evento-component';

const routes: Routes = [
  {
    path: '',
    component: EventosComponent
  },
  {
    path: 'crear',
    component: CrearEventoComponent
  },
  {
    path: ':id',
    component: DetalleEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }