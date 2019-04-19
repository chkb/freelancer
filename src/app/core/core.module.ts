import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { LoginProviderService } from './login-provider.service';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [
        LoginProviderService,
        AuthGuard,
    ],
    bootstrap: []
})
export class CoreModule { }
