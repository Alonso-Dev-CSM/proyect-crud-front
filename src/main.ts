import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environments';
import { enableProdMode } from '@angular/core';

if( !navigator.geolocation ){
  alert('Navagador sin acceso a Geolocation');
  throw new Error('Navagador sin acceso a Geolocation');
}

if( environment.production ){
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
