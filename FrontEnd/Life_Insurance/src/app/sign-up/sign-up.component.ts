import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

   repeatpass :string ='none';
   displayMsg :string ='';
   isAccountCreated : boolean =false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
 
  registerForm =new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
   
    email:new FormControl("",[Validators.required,Validators.email]),
    
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),

    rpwd:new FormControl("")
  });

  registerSubmitted(registerForm:any){
     console.log("SUbmitted "+ (this.registerForm.controls));
    let  user = new User();
    user.Name = registerForm.controls.name.value;
    user.EmailId  = registerForm.controls.email.value;
    user.Password = registerForm.controls.pwd.value;
    console.log(user)
    if(this.PWD.value==this.RPWD.value){

      console.log(this.registerForm.valid);
      this.repeatpass = 'none'

      this.authService.registerUser(user).subscribe(res=>{
       
          alert("account created successfully!");
        
        

       },
       error => {
        console.log(error);
        if (error.status == 400) {
          alert("Email already exist!")
        }
        else if (error.status == 404)
        {
          alert("Email Or Password Invalid!")
        }
      } 
       
       );

    }
   
    
  }
  get Name() : FormControl{
     return this.registerForm.get("name") as FormControl;
   }
 
  get Email() : FormControl{
    return this.registerForm.get("email") as FormControl;
  }
 
  get PWD() : FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
   get RPWD() : FormControl{
     return this.registerForm.get("rpwd") as FormControl;
   }
}
