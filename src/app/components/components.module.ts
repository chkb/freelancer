import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../core/material.module';
import { OverlaySpinnerServiceService } from '../service/overlay/overlay-service/overlay-spinner-service.service';
import {
    OverlaySpinnerWrapperComponent,
} from '../service/overlay/overlay-spinner-wrapper/overlay-spinner-wrapper.component';
import { OverlaySpinnerComponent } from '../service/overlay/overlay-spinner/overlay-spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFreelancerComponent } from './freelancer/create-freelancer/create-freelancer.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { SearchFreelancerComponent } from './freelancer/search-freelancer/search-freelancer.component';
import { ViewFreelancerComponent } from './freelancer/view-freelancer/view-freelancer.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        DashboardComponent,
        LoginComponent,
        CreateFreelancerComponent,
        EditFreelancerComponent,
        ViewFreelancerComponent,
        SearchFreelancerComponent,
        LoginComponent,
        LoginEmailComponent,
        SignupComponent,
        OverlaySpinnerComponent,
        OverlaySpinnerWrapperComponent,
    ],
    providers: [
        OverlaySpinnerServiceService
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule
    ]

})
export class ComponentsModule { }
