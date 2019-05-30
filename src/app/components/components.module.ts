import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFreelancerComponent } from './freelancer/create-freelancer/create-freelancer.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { SearchFreelancerComponent } from './freelancer/search-freelancer/search-freelancer.component';
import { ViewFreelancerComponent } from './freelancer/view-freelancer/view-freelancer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        DashboardComponent,
        LoginComponent,
        CreateFreelancerComponent,
        EditFreelancerComponent,
        ViewFreelancerComponent,
        SearchFreelancerComponent
    ],

})
export class ComponentsModule { }
