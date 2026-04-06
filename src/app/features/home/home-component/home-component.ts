import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  eventos = [
    {
      titulo: 'Concierto Rock',
      imagen: 'https://loremflickr.com/600/400/rock,band'
    },
    {
      titulo: 'Festival electrónico',
      imagen: 'https://loremflickr.com/600/400/music'
    },
    {
      titulo: 'Evento Cultural',
      imagen: 'https://loremflickr.com/600/400/band'
    }
  ];
}
