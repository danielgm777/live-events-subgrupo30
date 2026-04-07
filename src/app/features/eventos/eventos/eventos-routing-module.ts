import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from '../eventos-component/eventos-component/eventos-component';
import { DetalleEventoComponent } from '../detalle-evento-component/detalle-evento-component';

const routes: Routes = [
  {
    path: '',
    component: EventosComponent
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
export class EventosRoutingModule {}