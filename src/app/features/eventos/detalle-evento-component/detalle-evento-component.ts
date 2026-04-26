import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritosService } from '../../../core/servicios/favoritos.services';
import { EventosService } from '../../../core/servicios/eventos.services';

declare var bootstrap: any;

@Component({
  selector: 'app-detalle-evento-component',
  standalone: false,
  templateUrl: './detalle-evento-component.html',
  styleUrls: ['./detalle-evento-component.css'],
})
export class DetalleEventoComponent {

  evento: any;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private router: Router,
    private favoritosService: FavoritosService
  ) { }


  //Método que se ejecuta al cargar el componente. Si el evento existe, lo muestra, si no, muestra un error en consola.
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.evento = this.eventosService.getEventoById(id);

    if (!this.evento) {
      console.error('Evento no encontrado');
    }
  }

  //Método que se dispara al dar clic en el botón contactar. Redirige a la pantalla de contáctenos.
  contactar() {
    this.router.navigate(['/contacto']);
  }

  //Método que se dispara al dar clic en el botón reservar. Muestra un modal de confirmación.
  reservar() {
    const modal = document.getElementById('modalReserva');

    if (modal) {

      console.log('encontró el modal');
      const instancia = new bootstrap.Modal(modal);
      instancia.show();
    }
  }

  //Método que se dispara al dar clic en el botón de confirmar reserva. Cierra el modal y redirige a la pantalla de inicio.
  ir_a_Home() {
    const modal = document.getElementById('modalReserva');
    const instancia = bootstrap.Modal.getInstance(modal);

    if (instancia) {
      instancia.hide();
    }

    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');

    this.router.navigate(['/home']);
  }

  //Método que se dispara al dar clic en el botón de agregar a favoritos. Agrega el evento a la pantalla de favoritos.
  agregarAFavoritos() {
    this.favoritosService.agregarFavorito(this.evento);
  }
}