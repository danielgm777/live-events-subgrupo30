import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing-module';
import { EventosComponent } from '../eventos-component/eventos-component/eventos-component';
import { LayoutModule } from "../../../layout/layout-module";
import { SharedModule } from '../../../shared/shared-module';
import { FormsModule } from '@angular/forms';
import { DetalleEventoComponent } from '../detalle-evento-component/detalle-evento-component';
import { CrearEventoComponent } from '../crear-evento-component/crear-evento-component';

@NgModule({
  declarations: [
    EventosComponent,
    DetalleEventoComponent,
    CrearEventoComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    LayoutModule,
    SharedModule,
    FormsModule
]
})

export class EventosModule {}