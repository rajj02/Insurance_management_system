import { Component, OnInit } from '@angular/core';
import { GetPoliciesService } from '../get-policies.service';
import { Policy } from '../user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[GetPoliciesService]
})
export class HomePageComponent implements OnInit {

  policies:any[]=[];
  constructor(private policyservice:GetPoliciesService) { }

  ngOnInit(): void {
    this.policyservice.GetPolicy().subscribe({
      next:(policies)=>{
        this.policies=policies;
      },
      error:(response)=>{
        console.log(response);
      }
      
     })

  }

}
