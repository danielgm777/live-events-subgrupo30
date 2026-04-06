import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing-module';
import { EventosComponent } from '../eventos-component/eventos-component/eventos-component';
import { LayoutModule } from "../../../layout/layout-module";
import { SharedModule } from '../../../shared/shared-module';

@NgModule({
  declarations: [
    EventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    LayoutModule,
    SharedModule
]
})
export class EventosModule {}