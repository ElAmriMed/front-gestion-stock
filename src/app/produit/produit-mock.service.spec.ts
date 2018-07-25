import { TestBed, inject } from '@angular/core/testing';

import { ProduitMockService } from './produit-mock.service';

describe('ProduitMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitMockService]
    });
  });

  it('should be created', inject([ProduitMockService], (service: ProduitMockService) => {
    expect(service).toBeTruthy();
  }));
});
