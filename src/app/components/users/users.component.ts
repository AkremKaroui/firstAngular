import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  isLoaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'John.Doe@gmail.com',
          isActive: true,
          registered: new Date('01/02/2014 10:31:33'),
          isHiden: true,
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'Johnson.Kevin@gmail.com',
          isActive: false,
          registered: new Date('01/22/2020 02:20:54'),
          isHiden: true,
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'Karen.w@gmail.com',
          isActive: false,
          registered: new Date('11/02/2019 20:52:01'),
          isHiden: true,
        }
      ];
      this.isLoaded = true;
    }, 500);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user.isHiden = true;
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

}
