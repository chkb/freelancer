import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySpinnerWrapperComponent } from './overlay-spinner-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OverlaySpinnerWrapperComponent', () => {
  let component: OverlaySpinnerWrapperComponent;
  let fixture: ComponentFixture<OverlaySpinnerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaySpinnerWrapperComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySpinnerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
