import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menuItems = [
    { label: 'Item 1', link: '/item1' },
    { label: 'Item 2', link: '/item2' },
  ];

}
