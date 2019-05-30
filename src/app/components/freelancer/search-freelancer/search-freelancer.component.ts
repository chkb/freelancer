import { Component, OnInit } from '@angular/core';
import { moveIn } from 'src/app/core/router.animations';

@Component({
  selector: 'app-search-freelancer',
  templateUrl: './search-freelancer.component.html',
  styleUrls: ['./search-freelancer.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class SearchFreelancerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
