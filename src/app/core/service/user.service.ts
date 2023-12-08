import { Injectable } from '@angular/core';
import {User} from "../model/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url  = 'http://127.0.0.1:8080/api/v1/users';

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }


  async getUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }



}
