import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPolicy } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserPolicyService {

  constructor(private http :HttpClient) { }

  baseurl ="https://localhost:44382/api";

  registerUserPolicy(userpolicy : UserPolicy){
    console.log(userpolicy);
    return this.http.post(this.baseurl + '/UserPolicy/Create', userpolicy); 
   }
}
