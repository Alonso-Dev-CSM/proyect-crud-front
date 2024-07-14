import { RouterModule } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { MapboxComponent, LoadingComponent } from '../../components';
import { PlacesService } from '../../services/places-service/places.service';




@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [RouterModule, MapboxComponent, LoadingComponent],
  templateUrl: './create-client.component.html',
  styles: ``
})
export default class CreateClientComponent implements AfterViewInit{

  constructor( private placesService: PlacesService ){}

  ngAfterViewInit(): void {
    
  }



}
