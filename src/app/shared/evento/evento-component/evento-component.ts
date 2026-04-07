import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-component',
  standalone: false,
  templateUrl: './evento-component.html',
  styleUrls: ['./evento-component.css'],
})
export class EventoComponent {
  @Input() tituloEvento: string = '';
  @Input() descripcionEvento: string = '';
  @Input() imagenEvento: string = '';
  @Input() esFavorito: boolean = false;
  @Output() eliminarEvento = new EventEmitter<void>();

  constructor(private router: Router) {

  }

  verMas() {
    this.router.navigate(['/eventos', this.tituloEvento]);
  }

  eliminar() {
    this.eliminarEvento.emit();
  }
}
