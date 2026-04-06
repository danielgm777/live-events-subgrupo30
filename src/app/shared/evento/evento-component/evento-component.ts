import { Component, Input } from '@angular/core';

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
}
