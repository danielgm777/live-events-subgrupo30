import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritosService } from '../../../core/servicios/favoritos.services';

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
    private router: Router,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // Simulación (luego puedes traerlo de backend)
    this.evento = {
      titulo: id,
      fecha: '20 de abril de 2026',
      lugar: 'Bogotá, Colombia',
      precio: '$80.000',
      descripcion: 'Disfruta de una noche inolvidable con las mejores bandas de rock en vivo. Un evento lleno de energía, música y una experiencia única.',
      imagen: 'https://loremflickr.com/600/800/music?random=1'
    };
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
