import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    FirebaseModule,
    ServiceModule,
    ComponentsModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }
