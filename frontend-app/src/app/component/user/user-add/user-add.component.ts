import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  roles: Role[];
  submitted = false;
  userAddForm: FormGroup;

  constructor(
    private router: Router,
    private roleService: RoleService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validateForm();
    this.getRoles();
  }

  validateForm() {
    this.userAddForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    });
  }

  get f() {
    return this.userAddForm.controls;
  }

  async getRoles() {
    let response = await this.roleService.getRoles().toPromise();
    if (response.message == 'success') {
      this.roles = response.data.roles;
    }
  }


  async submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userAddForm.invalid) {
      return;
    }
    await this.userService.saveUser(this.prepareUser())
      .subscribe((response) => {
        if (response.message === 'success') {
          this.router.navigateByUrl('/user/list');
        }
      });

  }

  prepareUser(): User {
    const user = new User();
    user.name = this.f.name.value;
    user.email = this.f.email.value;
    user.mobile = this.f.mobile.value;
    user.password = this.f.password.value;

    const role = new Role();
    role._id = this.f.role.value;
    user.role = role;

    return user;
  }
}
