import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetPoliciesService } from '../get-policies.service';
import { Policy } from '../user';

@Component({
  selector: 'app-policydetail',
  templateUrl: './policydetail.component.html',
  styleUrls: ['./policydetail.component.css'],
  providers:[GetPoliciesService]
})
export class PolicydetailComponent implements OnInit {

  // policylist:Policy ={
  //   PolicyId:0,
  // PolicyName:'',
  // Amount:0,
  // Duration:0,
  // AgeLimit:0,
  // PolicyCover:0,
  // Description:''
  

  // };
 
  public policy:any=[];
  //policylist =new Policy();
  constructor(private route:ActivatedRoute,private getpoliciesservice:GetPoliciesService,private router:Router){}
  
  //console.log(this.policylist);
  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next:(params)=>{
      const id=  params.get('PolicyId');

      console.log(id)
       if(id){
          this.getpoliciesservice.GetPolicyById(id).subscribe({
            next:(response) => {
              console.log(response);
                 this.policy =response;
                 console.log(this.policy);

            }
                
          })
       }
      }
    })
  }

}
