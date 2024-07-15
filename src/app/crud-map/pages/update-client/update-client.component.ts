import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapboxService, PlacesService } from '../../services';
import { MapboxComponent } from '../../components';


@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [RouterModule, MapboxComponent],
  templateUrl: './update-client.component.html',
  styles: ``
})
export default class UpdateClientComponent {

  constructor( 
    private placesService: PlacesService,
    private mapboxService: MapboxService,

    private mapbox: MapboxComponent

  ){}

  private debounceTimer?: NodeJS.Timeout

  ngAfterViewInit(): void {
    
  }


  searchPostCode(postalCode: string = ''){
    if( this.debounceTimer ) clearTimeout( this.debounceTimer )

      this.debounceTimer = setTimeout(() => {
        this.placesService.getPostCode(postalCode)
      }, 500)
  
  }

  showPostCode( postalCode: string ){
    if(!this.placesService.isUserLocationReady) throw Error('No hay ubicación de usuario');
    if(!this.mapboxService.isMapReady) throw Error('No hay mapa disponible')

    this.mapbox.flyTo(this.placesService.getPostCode(postalCode)!)
  }
  


}
