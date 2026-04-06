import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing-module';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from '../contacto-component/contacto-component';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule
  ]
})
export class ContactoModule { }
