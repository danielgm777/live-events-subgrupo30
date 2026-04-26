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

  //Método que se dispara al dar clic en el botón de enviar. Valida que los campos no estén vacíos 
  // y muestra un modal con el resultado
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

  //Método para mostrar el modal
  mostrarModal() {
    const modal = new bootstrap.Modal(
      document.getElementById('modalMensaje')
    );
    modal.show();
  }
}