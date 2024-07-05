import { Component, OnInit } from '@angular/core';
import { ReservationComponent } from '../reservation';

@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.scss'],
  standalone: true,
  imports: [
    ReservationComponent
  ]
})
export class IntroBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
