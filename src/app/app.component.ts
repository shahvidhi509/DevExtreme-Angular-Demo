import { Component } from '@angular/core';
interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // User list
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Harry Potter',
      email: 'harry@gamil.com',
      phone: '123-456-7890',
      avatar: '',
    },
    {
      id: 2,
      name: 'James Potter',
      email: 'james@gamil.com',
      phone: '987-127-3210',
      avatar: '',
    },
    {
      id: 3,
      name: 'Lily Potter',
      email: 'lily@gamil.com',
      phone: '989-004-5410',
      avatar: '',
    },
    {
      id: 4,
      name: 'Albus Potter',
      email: 'albus@gamil.com',
      phone: '657-432-3288',
      avatar: '',
    },
    {
      id: 5,
      name: 'Ginny Weasley',
      email: 'ginny@gamil.com',
      phone: '776-654-3770',
      avatar: '',
    },
  ];

  selectedUser: any = {};

  // Detail view visible flag
  popoverDetailVisible = false;

  constructor() {}

  generateAvatar(user: UserInterface): void {
    const nameInitials = user.name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('');

    user[
      'avatar'
    ] = `https://ui-avatars.com/api/?name=${nameInitials}&background=random&size=100`;
  }

  // show user details on value change of selection
  showUserDetailsPopover(event: any): void {
    this.selectedUser = event.itemData;
    if (this.selectedUser && !this.selectedUser.avatar) {
      this.generateAvatar(this.selectedUser);
    }
    this.popoverDetailVisible = true;
  }
}
