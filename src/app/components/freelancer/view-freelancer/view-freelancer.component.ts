import { Component, OnInit } from '@angular/core';
import { moveIn } from 'src/app/core/router.animations';

@Component({
  selector: 'app-view-freelancer',
  templateUrl: './view-freelancer.component.html',
  styleUrls: ['./view-freelancer.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class ViewFreelancerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
