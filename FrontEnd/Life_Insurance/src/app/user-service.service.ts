import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   user =  new User();
   
   
  
  constructor(private _httpClient:HttpClient) {}
   
  GetUsers()
  {
   return this._httpClient.get<any[]>("https://localhost:44395/api/userservice")
  }
  PostUser()
  {
    return this._httpClient.post("https://localhost:44395/api/userservice",this.user);
    
  }
}
