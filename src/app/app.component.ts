import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', 
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  

})
export class AppComponent {
  title = 'homes';
}