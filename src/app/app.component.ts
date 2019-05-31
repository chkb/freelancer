import { Component } from '@angular/core';
import { LoginProviderService } from './core/login-provider.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
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

  constructor(
    private loginProviderService: LoginProviderService
  ) {
    this.loginProviderService.user.subscribe(user => {
      this.user = user;
    });
  }

  logout(): void {
    this.loginProviderService.signOut();
  }
}
