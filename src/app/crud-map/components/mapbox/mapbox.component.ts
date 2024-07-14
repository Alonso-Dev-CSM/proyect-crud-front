import { RouterModule } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl'
import { MapboxService, PlacesService } from '../../services';


@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './mapbox.component.html',
  styles: ``
})


export class MapboxComponent implements AfterViewInit{


  constructor ( 
    private map: MapboxService,
    private placesService: PlacesService,
  ){}



  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

  
  @ViewChild('map') divmap?: ElementRef;

  async ngAfterViewInit(): Promise<void> {


    if( !this.divmap ) throw 'Elemento HTML no encontrado';

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
  }
 

}
