import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterModule, LogInComponent ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
