import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Policy } from '../user';
import { FormControl, FormGroup,NgForm,Validators } from '@angular/forms';
@Component({
  selector: 'app-policy1',
  templateUrl: './policy1.component.html',
  styleUrls: ['./policy1.component.css']
})
export class Policy1Component implements OnInit {

  constructor(private policyservice :PolicyService) { }

  ngOnInit(): void {
  }

  ApplyForm = new FormGroup({
    policyid: new FormControl('', [Validators.required]),
    policyname: new FormControl('', [Validators.required]),
    amount : new FormControl('',[Validators.required]),
    duration :new FormControl('',[Validators.required]),
    policycover:new FormControl('',[Validators.required]),
    agelimit :new FormControl('',[Validators.required]),
    description :new FormControl('',[Validators.required]),
  })

  ApplyNow(ApplyForm : any) {
    
    let  policy = new Policy();
    //policy.PolicyId= ApplyForm.controls.policyid.value;
    policy.PolicyName= ApplyForm.controls.policyname.value;
    policy.Amount= ApplyForm.controls.amount.value;
    policy.Duration= ApplyForm.controls.duration.value;
    policy.PolicyCover= ApplyForm.controls.policycover.value;
    policy.AgeLimit= ApplyForm.controls.agelimit.value;
    policy.Description= ApplyForm.controls.description.value;

    console.log(policy);
    this.policyservice.AddPolicy(policy).subscribe(res => {
      console.log("In user policy service" + res);
      
        alert("Applied successfully");
    },
    error => {
      console.log("Error " + error);
      if (error.status == 400) {
        alert("Some error occured!")
      }
      else if (error.status == 404)
      {
        alert("Invalid!")
      }
    }

    
    );



 
}
// get PolicyId(): FormControl {
//   return this.ApplyForm.get('policyid') as FormControl;
// }

// get PolicyName(): FormControl {
//   return this.ApplyForm.get('policyname') as FormControl;
// }


// get Amount(): FormControl {
//   return this.ApplyForm.get('amount') as FormControl;
// }

// get Duration(): FormControl {
//   return this.ApplyForm.get('duration') as FormControl;
// }
}