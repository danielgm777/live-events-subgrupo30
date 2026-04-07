import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-component',
  standalone: false,
  templateUrl: './eventos-component.html',
  styleUrl: './eventos-component.css',
})
export class EventosComponent {

  eventos = [
    { titulo: 'Concierto Rock', descripcion: 'Una noche llena de música en vivo.', imagen: ''},
    { titulo: 'Festival Electrónico', descripcion: 'Los mejores DJs en un solo lugar.', imagen: ''},
    { titulo: 'Evento Cultural', descripcion: 'Arte, cultura y tradición.', imagen: '' },
    { titulo: 'Show de Comedia', descripcion: 'Ríe con los mejores comediantes.', imagen: '' },
    { titulo: 'Festival Gastronómico', descripcion: 'Sabores únicos para disfrutar.', imagen: '' },
    { titulo: 'Concierto Pop', descripcion: 'Los artistas del momento en vivo.', imagen: '' }
  ];

  ngOnInit() {
    this.eventos = this.eventos.map(e => ({
      ...e,
      imagen: this.getImagenRandom()
    }));
  }

  getImagenRandom() {
    return 'https://loremflickr.com/400/600/music?random=' + Math.random();
  }
}
