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

  constructor(private favoritosService: FavoritosService) { }

  //Método que se ejecuta al cargar el componente. Carga los eventos favoritos desde el servicio.
  ngOnInit() {
    this.favoritos = this.favoritosService.getFavoritos();
  }

  //Método que se dispara al dar clic en eliminar favorito. Llama al servicio que elimina el favorito y recarga los favoritos.
  eliminar(id: number) {
    this.favoritosService.eliminarFavorito(id);
    this.favoritos = this.favoritosService.getFavoritos();
  }
}