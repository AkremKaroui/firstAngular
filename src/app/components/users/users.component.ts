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
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};

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
          image: 'https://dummyimage.com/600x600/600/fff&text=John',
          isActive: true,
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
          image: 'https://dummyimage.com/600x600/040/fff&text=Kevin',
          isActive: false,
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
          image: 'https://dummyimage.com/600x600/080/fff&text=Karen',
          isActive: false,
        }
      ];
      this.isLoaded = true;
      this.enableAdd = true;
      this.setCurrentClasses();
      this.setCurrentStyles();
      this.addUser({
        firstName: 'Akrem',
        lastName: 'Karoui',
        isActive: true,
      });
    }, 500);
  }


  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.isExtended,
    };
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.isExtended ? '0' : '0.9em',
      'font-size': this.isExtended ? '' : '2rem'
    };
  }
}
