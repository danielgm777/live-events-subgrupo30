import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-component',
  standalone: false,
  templateUrl: './eventos-component.html',
  styleUrl: './eventos-component.css',
})
export class EventosComponent {

  eventos = [
    { titulo: 'Concierto Rock', descripcion: 'Una noche llena de música en vivo.' },
    { titulo: 'Festival Electrónico', descripcion: 'Los mejores DJs en un solo lugar.' },
    { titulo: 'Evento Cultural', descripcion: 'Arte, cultura y tradición.' },
    { titulo: 'Show de Comedia', descripcion: 'Ríe con los mejores comediantes.' },
    { titulo: 'Festival Gastronómico', descripcion: 'Sabores únicos para disfrutar.' },
    { titulo: 'Concierto Pop', descripcion: 'Los artistas del momento en vivo.' }
  ];

  getImagenRandom() {
    return 'https://loremflickr.com/600/400/music?random=' + Math.random();
  }
}
