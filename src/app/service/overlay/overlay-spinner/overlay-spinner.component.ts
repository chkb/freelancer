import { Component, OnInit } from '@angular/core';

import { OverlaySpinnerServiceService } from '../overlay-service/overlay-spinner-service.service';

@Component({
  selector: 'dn-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent implements OnInit {
  message = '';
  disableSpinner = false;
  constructor(
    private overlaySpinnerServiceService: OverlaySpinnerServiceService
  ) { }

  ngOnInit() {
    this.message = this.overlaySpinnerServiceService.message;
    this.disableSpinner = this.overlaySpinnerServiceService.disableSpinner;
  }
}
