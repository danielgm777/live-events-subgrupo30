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

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.evento = this.eventosService.getEventoById(id);

    if (!this.evento) {
      console.error('Evento no encontrado');
    }
  }

  contactar() {
    this.router.navigate(['/contacto']);
  }

  reservar() {
    const modal = new bootstrap.Modal(
      document.getElementById('modalReserva')
    );
    modal.show();
  }

  ir_a_Home() {
    const modalElement = document.getElementById('modalReserva');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);

    if (modalInstance) {
      modalInstance.hide();
    }

    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');

    this.router.navigate(['/home']);
  }

  agregarAFavoritos() {
    this.favoritosService.agregarFavorito(this.evento);
  }
}
