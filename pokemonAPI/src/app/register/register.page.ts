// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  email = ""
  password = ""
  password2 = ""

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) { }
  public register() {
    if (this.password == this.password2) {
      this.authService
        .signInRegular(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['/']);
        })
        .catch((err) => { 
          alert('Error: ' + err); 
          console.log('error: ' + err); 
          this.password = '';
        }); 
    } else {
      alert ("The passwords are not equal")
    }
  }
}