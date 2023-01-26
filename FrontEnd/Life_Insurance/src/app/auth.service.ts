import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Log, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router :Router) { }

   baseUrl = "https://localhost:44363/api/"
  
   registerUser(user : User){
    console.log(user);
    return this.http.post(this.baseUrl + 'user/CreateUser', user); 
   }

    loginUser(login:Log)
  {
    return this.http.post(this.baseUrl + 'user/LoginUser',login);
      
  }

  signOut()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
  }
   
  storeToken(tokenValue:any)
  {
    localStorage.setItem('token',tokenValue);
  }
  
  getToken()
  {
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean
  {
    return !!localStorage.getItem('token');
  }

  getEmail() {
    return localStorage.getItem("email")
  }
  getrole() {
    return localStorage.getItem("role")
  }
  getuserid() {
    return localStorage.getItem("userid")
  }

}
