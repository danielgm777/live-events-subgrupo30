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

  //Método para guardar la imagen del evento. Se guarda sólo la URL de la imagen.
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.evento.imagen = reader.result; 
      };

      reader.readAsDataURL(file);
    }
  }

  //Método para crear un evento. Valida que el formulario sea válido y si es valído llama al servicio que agrega los eventos.
  crearEvento(form: any) {

    if (form.invalid || !this.evento.imagen) {
      return;
    }

    this.eventosService.agregarEvento(this.evento);
    this.router.navigate(['/eventos']);
  }
}