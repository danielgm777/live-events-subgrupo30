import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EventosService {

  constructor() {
    this.inicializarEventos();
  }

  //Servicio para inicializar los eventos. Si hay eventos en memoria muestra esos, si no muestra unos predeterminados
  private inicializarEventos(): void {
    const data = localStorage.getItem('eventos');

    if (!data) {
      const eventosIniciales = this.getEventosIniciales();
      localStorage.setItem('eventos', JSON.stringify(eventosIniciales));
    }
  }

 //Eventos predeterminados
  private getEventosIniciales(): any[] {
    return [
      {
        id: 1,
        titulo: 'Concierto Rock',
        descripcion: 'Una noche llena de energía y música en vivo.',
        imagen: 'https://loremflickr.com/600/400/rock,concert',
        fecha: '2026-05-10',
        lugar: 'Bogotá',
        precio: '$80.000'
      },
      {
        id: 2,
        titulo: 'Festival Electrónico',
        descripcion: 'Los mejores DJs del momento.',
        imagen: 'https://loremflickr.com/600/400/electronic,music',
        fecha: '2026-06-15',
        lugar: 'Medellín',
        precio: '$120.000'
      },
      {
        id: 3,
        titulo: 'Evento Cultural',
        descripcion: 'Arte, tradición y cultura.',
        imagen: 'https://loremflickr.com/600/400/culture,event',
        fecha: '2026-07-20',
        lugar: 'Cali',
        precio: '$50.000'
      }
    ];
  }

  //Obtiener los eventos, si hay eventos en memoria los muestra, si no toma los predeterminados
  getEventos(): any[] {
    let eventos = JSON.parse(localStorage.getItem('eventos') || '[]');

  
    if (!eventos || eventos.length === 0) {
      eventos = this.getEventosIniciales();
      localStorage.setItem('eventos', JSON.stringify(eventos));
    }

    return eventos;
  }

 //Obtener el evento por id
  getEventoById(id: number): any {
    const eventos = this.getEventos();
    return eventos.find((e: any) => e.id === id);
  }

  //Crea un evento
  agregarEvento(evento: any): void {
    const eventos = this.getEventos();

    evento.id = Date.now();
    eventos.push(evento);

    localStorage.setItem('eventos', JSON.stringify(eventos));
  }

  //Elimina un evento
  eliminarEvento(id: number): void {
    const eventos = this.getEventos().filter((e: any) => e.id !== id);

    localStorage.setItem('eventos', JSON.stringify(eventos));
  }
}