import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {UserService} from "../../../../service/user.service";
import {User} from "../../../../model/user";
import {promises} from "dns";

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent{

  users = new Array<User>

  constructor(userService: UserService) {
    userService.getUsers().then((users: User[]) => {
      this.users = users;
      console.log(users);
    });
  }




}

