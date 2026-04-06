import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto-component.html',
  styleUrls: ['./contacto-component.css']
})
export class ContactoComponent {

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  tituloModal: string = '';
  mensajeModal: string = '';

  enviarFormulario() {

    if (!this.nombre || !this.correo || !this.mensaje) {
      this.tituloModal = 'Error';
      this.mensajeModal = 'Todos los campos son obligatorios';
      this.mostrarModal();
      return;
    }

    this.tituloModal = 'Éxito';
    this.mensajeModal = 'El mensaje se envió correctamente';

    this.mostrarModal();

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }

  mostrarModal() {
    const modal = new bootstrap.Modal(
      document.getElementById('modalMensaje')
    );
    modal.show();
  }
}