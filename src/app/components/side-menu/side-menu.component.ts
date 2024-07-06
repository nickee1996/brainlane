import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrandsComponent } from '../brands';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    BrandsComponent
  ]
})
export class SideMenuComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

}
