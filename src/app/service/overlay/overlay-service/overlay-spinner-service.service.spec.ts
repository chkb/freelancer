import { TestBed } from '@angular/core/testing';

import { OverlaySpinnerServiceService } from './overlay-spinner-service.service';
import { Overlay } from '@angular/cdk/overlay';

describe('OverlaySpinnerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: Overlay,
        useValue: {}
      }
    ]
  }));

  it('should be created', () => {
    const service: OverlaySpinnerServiceService = TestBed.get(OverlaySpinnerServiceService);
    expect(service).toBeTruthy();
  });
});
