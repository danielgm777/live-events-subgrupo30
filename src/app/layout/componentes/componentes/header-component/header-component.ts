import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
   standalone: false,
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']
})
export class HeaderComponent {

  abrirMenu = false;

  activarmenu() {
    this.abrirMenu = !this.abrirMenu;
  }

  cerrarMenu() {
    this.abrirMenu = false;
  }
}