import { Component } from '@angular/core';
import { FavoritosService } from '../../../core/servicios/favoritos.services';

@Component({
  selector: 'app-favoritos-component',
  standalone: false,
  templateUrl: './favoritos-component.html',
  styleUrl: './favoritos-component.css',
})
export class FavoritosComponent {

  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit() {
    this.favoritos = this.favoritosService.getFavoritos();
  }

  eliminar(titulo: string) {
    this.favoritosService.eliminarFavorito(titulo);
    this.favoritos = this.favoritosService.getFavoritos();
  }
}
