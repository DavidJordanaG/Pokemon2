import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage  {
  email = ""
  password = ""
  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) { }

  login() {
    this.authService
      .loginRegular(this.email, this.password)
      .then((res) => { console.log(res); this.router.navigate(['/']);
        })
      .catch((err) => {
        alert('Login Error: '+err);
        console.log('error: ' + err); 
      });
    }

}