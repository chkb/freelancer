import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material';

import { OverlaySpinnerServiceService } from '../overlay-service/overlay-spinner-service.service';
import { OverlaySpinnerComponent } from './overlay-spinner.component';

describe('OverlaySpinnerComponent', () => {
  let component: OverlaySpinnerComponent;
  let fixture: ComponentFixture<OverlaySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaySpinnerComponent],
      providers: [
        OverlaySpinnerServiceService,
        Overlay
      ],
      imports: [
        MatProgressSpinnerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
