import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../../../core/servicios/eventos.services';

@Component({
  selector: 'app-eventos-component',
  standalone: false,
  templateUrl: './eventos-component.html',
  styleUrl: './eventos-component.css',
})
export class EventosComponent {

  constructor(private router: Router, private eventosService: EventosService) { }
  eventos = [
    { titulo: 'Concierto Rock', descripcion: 'Una noche llena de música en vivo.', imagen: '', id: 1 },
    { titulo: 'Festival Electrónico', descripcion: 'Los mejores DJs en un solo lugar.', imagen: '', id: 2 },
    { titulo: 'Evento Cultural', descripcion: 'Arte, cultura y tradición.', imagen: '', id: 3 },
    { titulo: 'Show de Comedia', descripcion: 'Ríe con los mejores comediantes.', imagen: '', id: 4 },
    { titulo: 'Festival Gastronómico', descripcion: 'Sabores únicos para disfrutar.', imagen: '', id: 5 },
    { titulo: 'Concierto Pop', descripcion: 'Los artistas del momento en vivo.', imagen: '', id: 6 }
  ];

  ngOnInit() {
    this.eventos = this.eventos.map(e => ({
      ...e,
      imagen: this.getImagenRandom()
    }));
    this.cargarEventos();
  }

  // Método para obtener una imagen aleatoria
  getImagenRandom() {
    return 'https://loremflickr.com/400/600/music?random=' + Math.random();
  }

  irACrearEvento() {
    this.router.navigate(['/eventos/crear']);
  }

  cargarEventos() {
    this.eventos = this.eventosService.getEventos();
  }

  eliminar(id: number) {
    this.eventosService.eliminarEvento(id);
    this.eventos = this.eventosService.getEventos();
  }
}
