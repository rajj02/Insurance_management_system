import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApply } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserappliedService {

  constructor(private http :HttpClient) { }


  Url = "https://localhost:44382/api/userpolicy"
  
   ConfirmApply(userapply : UserApply){
    console.log(userapply);
    return this.http.post(this.Url , userapply); 
   }
}
