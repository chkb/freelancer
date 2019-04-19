import { Component, OnInit } from '@angular/core';

import { moveIn } from '../../core/router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less'],
    animations: [moveIn()],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
    }
}
