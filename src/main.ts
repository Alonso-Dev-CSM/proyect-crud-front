import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environments';
import { enableProdMode } from '@angular/core';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = `pk.eyJ1IjoiYWxvbnNvLXNtaXRoIiwiYSI6ImNseWthbzNwMDB5NXMycXB3MmF0djdybTYifQ.ISu2pAOqs_Rn-v6ekD5Fmg`


if( !navigator.geolocation ){
  alert('Navagador sin acceso a Geolocation');
  throw new Error('Navagador sin acceso a Geolocation');
}



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
