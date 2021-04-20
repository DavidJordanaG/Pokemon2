import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';
//import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(private activatedRoute: ActivatedRoute, private dades: ApiServiceService, private navCtrl: NavController,
    //private authService: AuthenticateService,
    private formBuilder: FormBuilder ) {
     
   }

  ngOnInit() {
    
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  
}
validation_messages = {
  'email': [
    { type: 'required', message: 'Email és obligatori.' },
    { type: 'pattern', message: 'Introdueix un email vàlid.' }
  ],
  'password': [
    { type: 'required', message: 'Password és obligatori.' },
    { type: 'minlength', message: 'Password ha de contenir almenys 5 caràcters.' }
  ]
};

/*loginUser(value) {
  this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/XXXXXXXX'); // posar una ruta de la nostra app
    }, err => {
      this.errorMessage = err.message;
    })
}

goToRegisterPage() {
  this.navCtrl.navigateForward('/register');
}
*/
}
