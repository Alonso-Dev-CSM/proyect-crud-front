import { RouterModule } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl'

import { MapboxService } from '../../services/mapbox.service';


@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './mapbox.component.html',
  styles: ``
})


export class MapboxComponent implements AfterViewInit{

  constructor ( private map: MapboxService ){}
  
  @ViewChild('map') divmap?: ElementRef;

  ngAfterViewInit(): void {
    if( !this.divmap ) throw 'Elemento HTML no encontrado';


    const map = new Map({
      container: this.divmap?.nativeElement, // container ID
      center: [-101.6499131,21.1307806],
      zoom: 13
    });
  }



 
  

}
