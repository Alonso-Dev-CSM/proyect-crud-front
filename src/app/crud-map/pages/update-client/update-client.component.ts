import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-client.component.html',
  styles: ``
})
export default class UpdateClientComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new Map({
      container: 'map', // container ID
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
  }

}
