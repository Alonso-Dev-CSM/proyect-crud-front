import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import Mapper, { Map, LngLatLike } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  map?: mapboxgl.Map

  

  get isMapReady(){
    return !!!this.map
    
  }

  setMap( map: Map){
    this.map = map
  }

  flyTo( coords: LngLatLike ){
    if(!this.isMapReady) throw Error('El mapa no esta inicializado')

      this.map?.flyTo({
        center: coords,
        zoom: 13
      })
  }

  

  constructor() {
  
    Mapper.accessToken = environment.mapbox_key;

  }
  buildMap() {

    }
}
