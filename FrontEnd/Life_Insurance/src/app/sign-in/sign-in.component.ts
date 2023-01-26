import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Log } from '../user';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService, private router :Router) { }
   
  ngOnInit(): void {
    
  }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    pwd: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ])

  })
  isuservalid: boolean = false;
  Login(LoginForm : any) {
    
    let  log = new Log();
    log.EmailId = LoginForm.controls.email.value;
   
    log.Password = LoginForm.controls.pwd.value;

    console.log(log);
    this.authService.loginUser(log).subscribe(res => {
      console.log("In service 1" + res);
      
      localStorage.setItem("role", Object.values(res)[1]);
        localStorage.setItem("email", Object.values(res)[2]);
        localStorage.setItem("userid", Object.values(res)[3]);
       // this.isuservalid = true;
       console.log(Object.values(res));
       this.authService.storeToken(Object.values(res));
        alert("Login Successful")

        if (Object.values(res)[1] == 0)
          this.router.navigate(["admindashboard"]);
        if (Object.values(res)[1] == 1)
          this.router.navigate(["home"]);
      

    },
      error => {
        console.log("Error " + error);
        if (error.status == 400) {
          alert("Some error occured!")
        }
        else if (error.status == 404)
        {
          alert("Email Or Password Invalid!")
        }

        else if (error.status == 401)
        {
          alert("you are not a registered user !");
          this.router.navigate(["signup"]);
        }
      }
    
    );


  }




  get useremail(): FormControl {
    return this.LoginForm.get('email') as FormControl;
  }

  get userpass(): FormControl {
    return this.LoginForm.get('pwd') as FormControl;
  }


}
