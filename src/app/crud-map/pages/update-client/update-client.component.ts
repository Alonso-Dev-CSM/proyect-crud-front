import { Component } from '@angular/core';
import { MapboxComponent } from '../../components/mapbox/mapbox.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [RouterModule, MapboxComponent],
  templateUrl: './update-client.component.html',
  styles: ``
})
export default class UpdateClientComponent {



}
