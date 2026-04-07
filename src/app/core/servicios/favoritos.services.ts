import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favoritos: any[] = [];

  constructor() {
    this.favoritos = this.getFavoritos();
  }

  agregarFavorito(evento: any) {
    const existe = this.favoritos.find(e => e.titulo === evento.titulo);

    if (!existe) {
      this.favoritos.push(evento);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }

  getFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos') || '[]');
  }

  eliminarFavorito(titulo: string) {
    this.favoritos = this.favoritos.filter(e => e.titulo !== titulo);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}