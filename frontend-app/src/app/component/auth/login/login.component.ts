import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuider: FormBuilder
  ) { }

  ngOnInit(): void {

    this.validateForm();

  }

  validateForm() {
    this.loginForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    this.submitted = true;
    //stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    this.router.navigateByUrl('/dashboard');
  }

}
