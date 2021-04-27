import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {
  private user; 
  public userDetails: firebase.User = null; 
  public displayName = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user = afAuth.authState;
    this.user.subscribe(
      // subscribim una funció per comprobar si l'usuari ha fet login
      // actualitzem les dades locals si s'ha fet el login
      (user) => { 
        if (user) {
          this.userDetails = user;
          this.displayName = (this.userDetails.displayName) ?
          this.userDetails.displayName : this.userDetails.email; console.log(this.userDetails);
          this.router.navigate(['/']); 
        } else {
          this.userDetails = null; 
        }
      }
    ); 
  }

  signInRegular(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  loginRegular(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password); 
  }
  get isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true; 
    }
  }
  logout() {
    console.log('Logout');
    this.afAuth.signOut()
      .then((res) => this.router.navigate(['/folder/login']));
  } 
}