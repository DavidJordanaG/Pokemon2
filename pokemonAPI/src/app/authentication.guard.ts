import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { AuthenticateService } from './services/authentication.service';


@Injectable(
  { 
    providedIn: 'root'
  }
)
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticateService) { } 
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
      if ( this.authService.isLoggedIn ) {
        return true;
        
      } 
      alert('You must login before !')
      this.router.navigate(['/folder/login']);
      return false;
  }
}