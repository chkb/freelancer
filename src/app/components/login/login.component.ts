import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginProviderService } from '../../core/login-provider.service';
import { moveIn } from '../../core/router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    private subcribtion: Subscription;
    lockstate = 'inactive';
    constructor(
        private loginProvider: LoginProviderService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.subcribtion = this.loginProvider.user.subscribe(res => {
            if (res && res.uid) {
                this.router.navigate([`/dashboard`]);
            }
        });
    }

    googleLogin() {
        this.loginProvider.googleLogin();
    }

    facebookLogin() {
        this.loginProvider.facebookLogin();
    }

    ngOnDestroy(): void {
        if (this.subcribtion) {
            this.subcribtion.unsubscribe();
        }
    }
}
