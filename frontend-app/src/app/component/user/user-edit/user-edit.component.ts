import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  id: string;
  roles: Role[];
  submitted = false;
  userEditForm: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.validateForm();
    this.getRoles();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '') {
      this.getUser(this.id);
    }
  }

  validateForm() {
    this.userEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      role: ['', [Validators.required]]
    });

  }

  get f() {
    return this.userEditForm.controls;
  }


  async getRoles() {
    let response = await this.roleService.getRoles().toPromise();
    if (response.message == 'success') {
      this.roles = response.data.roles;
    }
  }

  async getUser(id: string) {
    if (id != '') {
      let response = await this.userService.getUser(id).toPromise();
      if (response.message == 'success') {
        this.user = response.data.user;
        this.userEditForm.patchValue(this.user);
        this.f.role.setValue(this.user.role._id);
      }
    }
  }


  async submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userEditForm.invalid) {
      return;
    }
    await this.userService.updateUser(this.id, this.prepareUser())
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

    const role = new Role();
    role._id = this.f.role.value;
    user.role = role;

    return user;
  }


}
