import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  id: string;
  users: User[];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    await this.userService.getUsers().subscribe(response => {
      if (response.message === 'success') {
        this.users = response.data.users;
      }
    }, error => {
      console.log(error);
    });
  }

  setId(id) {
    if (id != '') {
      this.id = id;
    }
  }
  async delete() {
    await this.userService.deleteUser(this.id).subscribe(response => {
      if (response.message === 'success') {
        this.getUsers();       
      }
    }, error => {
      console.log(error);
    });
  }
}
