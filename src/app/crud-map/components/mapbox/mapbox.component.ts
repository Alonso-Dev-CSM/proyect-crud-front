import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';


@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './mapbox.component.html',
  styles: ``
})
export class MapboxComponent implements AfterViewInit{

  @ViewChild('map') divmap?: ElementRef;

  ngAfterViewInit(): void {

    if( !this.divmap ) throw 'Elemento HTML no encontrado';

    const map = new Map({
      container: this.divmap?.nativeElement, // container ID
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
