import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/componentes/header-component/header-component';
import { FooterComponent } from './componentes/componentes/footer-component/footer-component';
import { PrincipalComponent } from './componentes/componentes/principal-component/principal-component';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class LayoutModule { }
