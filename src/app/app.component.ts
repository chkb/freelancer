import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: any = [
    {
      url: 'dashboard',
      text: 'Dashboard'
    },
    {
      url: 'search',
      text: 'Search For Freelancer'
    },
    {
      url: 'login',
      text: 'Login'
    }
  ];

  constructor() {
  }
}
