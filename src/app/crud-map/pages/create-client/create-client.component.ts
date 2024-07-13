import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MapboxComponent } from '../../components/mapbox/mapbox.component';


@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, MapboxComponent],
  templateUrl: './create-client.component.html',
  styles: ``
})
export default class CreateClientComponent {



}
