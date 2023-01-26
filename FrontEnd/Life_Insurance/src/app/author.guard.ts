import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate {
 
 
  constructor(private auth :AuthService ,private router :Router ) {
    
  }
  
  canActivate():boolean
     {
      if(this.auth.isLoggedIn())
      {
        return true;
      }
      else
      {
        alert("You are not logged in");
        this.router.navigate(['signin'])
        return false;
      }
    
   }
  
}
