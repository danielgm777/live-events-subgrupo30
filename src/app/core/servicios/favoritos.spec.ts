import { TestBed } from '@angular/core/testing';

import { FavoritosService } from './favoritos.services';

describe('Favoritos', () => {
  let service: FavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
