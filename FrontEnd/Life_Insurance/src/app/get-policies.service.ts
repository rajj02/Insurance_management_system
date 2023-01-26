import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetPoliciesService {

  constructor(private _http:HttpClient) { }

  GetPolicy()
  {
   return this._http.get<any[]>("https://localhost:44342/api/policy")
  }

  GetPolicyById(PolicyId:any):Observable<Policy>
  {
   return this._http.get<Policy>("https://localhost:44342/api/policy/"+PolicyId)
  }
}
