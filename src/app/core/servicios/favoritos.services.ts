import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favoritos: any[] = [];

  constructor() {
    const data = localStorage.getItem('favoritos');
    this.favoritos = data ? JSON.parse(data) : [];
  }

  getFavoritos() {
    return this.favoritos;
  }

  //Agrega un evento a la pantalla de favoritos
  agregarFavorito(evento: any) {
    const existe = this.favoritos.find(e => e.id === evento.id);

    if (!existe) {
      this.favoritos.push(evento);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }
  
  //Elimina un evento de la pantalla de favoritos
  eliminarFavorito(id: number) {
    this.favoritos = this.favoritos.filter(e => e.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}