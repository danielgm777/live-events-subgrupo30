import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing-module';
import { FavoritosComponent } from '../favoritos-component/favoritos-component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule,
    SharedModule
  ]
})
export class FavoritosModule { }
