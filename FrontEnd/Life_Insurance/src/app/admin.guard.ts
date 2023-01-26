import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

 
  constructor(private _authservice : AuthService,private _router :Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = this._authservice.getrole();
      let Role = Number(role);
  
  
      if (this._authservice.isLoggedIn() == true && Role == 0)
        return true;
      else {
  
        alert("you are not admin !")
        this._router.navigate([""]);
        return false;
      }
      return true;
  }
  
}
