import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent, FooterComponent, HeaderComponent, IntroBannerComponent, MenucartComponent, ReviewsComponent, SideMenuComponent, StatusBarComponent } from './components';

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
    SideMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuToggle = false;

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
}
