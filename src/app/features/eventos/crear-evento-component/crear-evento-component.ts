import { Component } from '@angular/core';
import { EventosService } from '../../../core/servicios/eventos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  standalone: false,
  templateUrl: './crear-evento-component.html'
})
export class CrearEventoComponent {

  evento: any = {
    titulo: '',
    descripcion: '',
    fecha: '',
    lugar: '',
    precio: '',
    imagen: ''
  };

  constructor(
    private eventosService: EventosService,
    private router: Router
  ) { }

  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.evento.imagen = reader.result; // 👈 base64
      };

      reader.readAsDataURL(file);
    }
  }

  crearEvento(form: any) {

    if (form.invalid || !this.evento.imagen) {
      return;
    }

    this.eventosService.agregarEvento(this.evento);
    this.router.navigate(['/eventos']);
  }
}