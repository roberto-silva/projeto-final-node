import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "../../sign-up.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpFormGroup: FormGroup = this.formBuilder.group({
    nome: [undefined, Validators.required],
    login: [undefined, Validators.required],
    senha: [undefined, Validators.required],
    email: [undefined, Validators.required],
    roles: ['ADMIN', Validators.required]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly signUpService: SignUpService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {
  }

  signUp() {
    this.signUpService.signUp(new User(this.signUpFormGroup.value)).subscribe({
      next: () => {
        this.toastrService.success("Login successful.");
        this.router.navigate(['/login']).then();
      },
      error: (error: any) => {
        this.toastrService.error(error.message);
      }
    });
  }
}
