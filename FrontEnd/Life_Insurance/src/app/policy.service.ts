import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './user';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http : HttpClient) { }

  baseUrl = "https://localhost:44342/api/"
  
  AddPolicy(policy : Policy){
    console.log(policy);
    return this.http.post(this.baseUrl + 'policy', policy); 
   }
}
