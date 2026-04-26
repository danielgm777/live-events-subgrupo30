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

  // Método que se ejecuta al cargar el componente. Asigna una imagen aleatoria a cada evento y carga los eventos desde el servicio.
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

  // Método que se dispara al dar clic en crear un evento. Redirige a la pantalla de creación de eventos.
  irACrearEvento() {
    this.router.navigate(['/eventos/crear']);
  }

  //Método para cargar los eventos. LLama al servicio que obtiene los eventos.
  cargarEventos() {
    this.eventos = this.eventosService.getEventos();
  }

  //Método que se dispara al dar clic en eliminar evento. LLama al servicio que elimina el vento y recarga los eventos.
  eliminar(id: number) {
    this.eventosService.eliminarEvento(id);
    this.eventos = this.eventosService.getEventos();
  }
}