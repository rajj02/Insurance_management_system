import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApply } from '../user';
import { UserappliedService } from '../userapplied.service';

@Component({
  selector: 'app-confirmapply',
  templateUrl: './confirmapply.component.html',
  styleUrls: ['./confirmapply.component.css']
})
export class ConfirmapplyComponent implements OnInit {

  constructor(private userappliedservice:UserappliedService) { }

  ngOnInit(): void {
  }

  ApplyForm = new FormGroup({
    policyid: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    policyname : new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required])
  })

  ApplyNow(ApplyForm : any) {
    
    let  userapply = new UserApply();
    
    userapply.UserName= ApplyForm.controls.username.value;
    userapply.PolicyName= ApplyForm.controls.policyname.value;
    userapply.Age= ApplyForm.controls.age.value;
   

   
    console.log(userapply);
    this.userappliedservice.ConfirmApply(userapply).subscribe(res => {
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
}
