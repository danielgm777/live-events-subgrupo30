import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento/evento-component/evento-component';
import { HomeRoutingModule } from '../features/home/home/home-routing-module';

@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    EventoComponent
  ]
})
export class SharedModule {}