import { Component, OnInit } from '@angular/core';
import { moveIn } from 'src/app/core/router.animations';

@Component({
  selector: 'app-create-freelancer',
  templateUrl: './create-freelancer.component.html',
  styleUrls: ['./create-freelancer.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class CreateFreelancerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
