import { RouterModule } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Injectable, ViewChild } from '@angular/core';

import { Map, Popup, Marker, LngLatLike } from 'mapbox-gl'
import { HttpClient } from '@angular/common/http';
import {  MapboxService, PlacesService } from '../../services';
import { CrudMapsModule } from '../../crud-map.module';


@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [ RouterModule, CrudMapsModule ],
  templateUrl: './mapbox.component.html',
  styles: ``
})


export default class MapboxComponent implements AfterViewInit{


  constructor ( 
    private placesService: PlacesService,
    private mapboxService: MapboxService
  ){}


  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }


  @ViewChild('map') divmap?: ElementRef;

  async ngAfterViewInit(): Promise<void> {

    if( !this.divmap ) throw 'Elemento HTML no encontrado';

    let http = HttpClient;
    this.placesService = new PlacesService();
    await this.placesService.getUserLocation();
    console.log(this.placesService.useLocation)

    const map = new Map({
      container: this.divmap?.nativeElement, // container ID
      center: this.placesService.useLocation,
      zoom: 13
    });

    
    const popup = new Popup()
      .setHTML(`
          <h6>Aqui estoy<h6/>
          <span>Estoy en este lugar del mundo<span/>
      `)

      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

      new Marker({color: color})
        .setLngLat(this.placesService.useLocation)
        .setPopup( popup )
        .addTo(map)

      this.mapboxService.setMap(map)

  }
 
}
