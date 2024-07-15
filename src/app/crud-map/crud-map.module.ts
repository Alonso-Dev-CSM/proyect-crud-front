import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbnNvLXNtaXRoIiwiYSI6ImNseWthbzNwMDB5NXMycXB3MmF0djdybTYifQ.ISu2pAOqs_Rn-v6ekD5Fmg';

import { MapboxService, PlacesService } from './services';

@Injectable({providedIn: 'root'})

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    PlacesService,
    MapboxService,
  ]

})
export class CrudMapsModule { }
