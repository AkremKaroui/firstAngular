import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  isExtended: boolean = true;
  isLoaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2014 10:31:33'),
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('01/22/2020 02:20:54'),
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          isActive: false,
          registered: new Date('11/02/2019 20:52:01'),
        }
      ];
      this.isLoaded = true;
    }, 500);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e){
    console.log(e.type);
  }

}
