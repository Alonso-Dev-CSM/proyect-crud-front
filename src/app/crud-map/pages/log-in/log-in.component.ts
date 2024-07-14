import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../../components';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  templateUrl: './log-in.component.html',
  styles: ``
})
export default class LogInComponent {

}
