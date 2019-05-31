import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

import { OverlaySpinnerWrapperComponent } from '../overlay-spinner-wrapper/overlay-spinner-wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class OverlaySpinnerServiceService {
  message = '';
  disableSpinner = false;
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) { }

  show(message = '', disableSpinner = false) {
    this.message = message;
    this.disableSpinner = disableSpinner;
    // Returns an OverlayRef (which is a PortalHost)
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(OverlaySpinnerWrapperComponent);
    this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
  }

  hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
