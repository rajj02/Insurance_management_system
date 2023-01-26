import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-user-srv-cmpt',
  templateUrl: './user-srv-cmpt.component.html',
  styleUrls: ['./user-srv-cmpt.component.css'],
  providers: [UserServiceService]
})
export class UserSrvCmptComponent implements OnInit {

  users:any[]=[];
  constructor(private _userServiceService:UserServiceService) { }

  ngOnInit(): void {
    this._userServiceService.GetUsers().subscribe(Response=>{console.log(Response)
      this.users=Response})
      this._userServiceService.PostUser().subscribe(Response=>{console.log(Response)
      })
  }


}
