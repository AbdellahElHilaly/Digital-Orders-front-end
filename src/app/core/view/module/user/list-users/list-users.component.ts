import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
  users: any[] = [
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'},
    {name: 'John Doe', email: 'email', phone: 'email', address: 'email'}
  ];

}
