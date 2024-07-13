import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbnNvLXNtaXRoIiwiYSI6ImNseWthbzNwMDB5NXMycXB3MmF0djdybTYifQ.ISu2pAOqs_Rn-v6ekD5Fmg';

import { MapboxComponent } from './components/mapbox/mapbox.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MapboxComponent
  ]
})
export class CrudMapsModule { }
