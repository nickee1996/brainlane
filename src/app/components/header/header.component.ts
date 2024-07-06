import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrandsComponent } from '../brands';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    BrandsComponent
  ]
})
export class HeaderComponent implements OnInit {

  @Output() menuToggleEmitter = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    console.log('toggleMenu');
    this.menuToggleEmitter.emit();
  }

}
