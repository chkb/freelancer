import { NgModule } from '@angular/core';
import { CrudService } from './crud-service/crud.service';

@NgModule({
    providers: [
        CrudService
    ],
    bootstrap: []
})
export class ServiceModule { }
