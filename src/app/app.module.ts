import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AuthGuard } from './core/auth-guard.service';
import { CoreModule } from './core/core.module';
import { LoginProviderService } from './core/login-provider.service';
import { MaterialModule } from './core/material.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ServiceModule } from './service/service.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreModule,
    FirebaseModule,
    ServiceModule,
    ComponentsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'freelancer'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    LoginProviderService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
