import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userCredentialsForm: FormGroup = this.formBuilder.group({
    username: ['admin@gmail.com', Validators.required],
    password: ['Admin@123', Validators.required]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService
  ) {
  }

  login() {
    this.loginService.login(this.userCredentialsForm.value)
  }
}
