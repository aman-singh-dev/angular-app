import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '') {
      this.getUser(this.id);
    }
  }

  async getUser(id: string) {
    if (id != '') {
      let response = await this.userService.getUser(id).toPromise();
      if (response.message == 'success') {
        this.user = response.data.user;
      }
    }
  }

}
