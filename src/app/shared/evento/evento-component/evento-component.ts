import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-component',
  standalone: false,
  templateUrl: './evento-component.html',
  styleUrls: ['./evento-component.css'],
})
export class EventoComponent {
  @Input() evento: any;
  @Input() esFavorito: boolean = false;
  @Input() mostrarEliminar: boolean = false;
  @Output() eliminarEvento = new EventEmitter<number>();

  constructor(private router: Router) {

  }

  //Método que se dispara al hacer clic en el botón "ver más" para navegar a su detalle
  verMas() {
    console.log('Evento recibido:', this.evento);

    if (!this.evento?.id) {
      console.error('Evento sin ID', this.evento);
      return;
    }

    this.router.navigate(['/eventos', this.evento.id]);
  }

  // Método que se dispara al hacer clic en el botón "eliminar" para emitir el evento de eliminación
  eliminar() {
    this.eliminarEvento.emit(this.evento.id);
  }
}