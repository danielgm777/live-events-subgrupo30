import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../core/servicios/eventos.services';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})

export class HomeComponent implements OnInit {

  eventos: any[] = [];

  constructor(private eventosService: EventosService) {}

  // Método para cargar los eventos al iniciar el componente
  ngOnInit() {
    this.eventos = this.eventosService.getEventos().slice(0, 3);
  }
}