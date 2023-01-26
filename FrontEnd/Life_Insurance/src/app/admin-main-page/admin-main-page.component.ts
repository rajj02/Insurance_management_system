import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../policy.service';
import { Policy } from '../user';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  constructor(private policyservice :PolicyService) { }

  ngOnInit(): void {
  }

  PolicyForm = new FormGroup({
    policyid: new FormControl('', [Validators.required]),
    policyname: new FormControl('', [Validators.required]),
    amount : new FormControl('',[Validators.required]),
    duration :new FormControl('',[Validators.required])
  })

  AddNow(PolicyForm : any) {
    
    let  policy = new Policy();
    policy.PolicyName= PolicyForm.controls.policyname.value;
    policy.Amount=PolicyForm.controls.amount.value;
    policy.Duration= PolicyForm.controls.duration.value;

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
get PolicyId(): FormControl {
  return this.PolicyForm.get('policyid') as FormControl;
}

get PolicyName(): FormControl {
  return this.PolicyForm.get('policyname') as FormControl;
}


get Amount(): FormControl {
  return this.PolicyForm.get('amount') as FormControl;
}

get Duration(): FormControl {
  return this.PolicyForm.get('duration') as FormControl;
}
}

