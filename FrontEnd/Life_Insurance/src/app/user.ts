
export class User {
  
    UserId: Number;
    Name : string;
    EmailId: string;
    Password: string;

constructor( )
{
    this.UserId=0;
    this.Name=  "";
    this.EmailId= "";
    this.Password= "";

}

}


export class Log {

    EmailId: string;
    Password: string;
  //controls: any;

constructor( )
{
    this.EmailId= "";
    this.Password= "";

}

}

export class UserPolicy {

    PolicyId: number;
    PolicyName: string;
    UserName:string;
    Amount:number;
    Age:number;
 

constructor( )
{
    this.PolicyId= 0;
    this.PolicyName= "";
    this.UserName="";
    this.Amount=0;
    this.Age=0;

}

}

export class Policy {

    PolicyId: number;
    PolicyName: string;
    Amount:number;
    Duration:number;
    PolicyCover:number;
    AgeLimit :number;
    Description:string;

constructor( )
{
    this.PolicyId= 0;
    this.PolicyName= "";
    this.Amount=0;
    this.Duration=0;
    this.PolicyCover=0;
    this.AgeLimit=0;
    this.Description="";

}

}

export class UserApply {

    UserPolicyId: number; 
    UserName:string;
    PolicyName :string;
    Age:number;
 

constructor( )
{
    this.UserPolicyId= 0;
    this.UserName="";
    this.PolicyName= "";
    this.Age=0;

}

}