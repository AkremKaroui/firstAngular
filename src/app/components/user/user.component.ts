import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent{
  //props
  user: User;
  //methods
  constructor(){
    this.user = {
      firstName: 'Akrem',
      lastName: 'Karoui',
      age: 22,
      address:{
        state: 'WA',
        street: '50 Hallgh St',
        city: 'Seattle'
      }
    };
  }

}
