import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent, FooterComponent, HeaderComponent, IntroBannerComponent, MenucartComponent, ReviewsComponent, StatusBarComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    HeaderComponent,
    StatusBarComponent,
    IntroBannerComponent,
    AboutComponent,
    ReviewsComponent,
    MenucartComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurant';
}
