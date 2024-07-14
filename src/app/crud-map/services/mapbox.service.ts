import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import Map from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  mapbox = (Map as typeof Map);
  map?: mapboxgl.Map;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = -101.6499131;
  lng = 21.1307806;
  zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    // this.mapbox.accessToken = environment.mapBoxToken;
    Map.accessToken = environment.mapbox_key;

  }
  buildMap() {
    this.map = new Map.Map({
      container: 'map',
      zoom: this.zoom,
      center: [-101.6499131,21.1307806]
    });
    this.map.addControl(new Map.NavigationControl());
    }
}
