import { Component, OnInit } from '@angular/core';
import { moveIn } from 'src/app/core/router.animations';

@Component({
  selector: 'app-edit-freelancer',
  templateUrl: './edit-freelancer.component.html',
  styleUrls: ['./edit-freelancer.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class EditFreelancerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
