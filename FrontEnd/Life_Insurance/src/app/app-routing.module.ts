import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmapplyComponent } from './confirmapply/confirmapply.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Policy1Component } from './policy1/policy1.component';
import { PolicydetailComponent } from './policydetail/policydetail.component';
import { AuthorGuard } from './author.guard';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
  //{path:"" ,redirectTo:"admindashboard" ,pathMatch:"full" },
  {path:"admindashboard" , component: AdminMainPageComponent,canActivate:[AdminGuard]},

  {path:"userdashboard" , component: UserMainPageComponent},

  {path:"" ,redirectTo:"home" ,pathMatch:"full" },
  {path:"home" , component: HomePageComponent},
  
  {path:"signin" , component:SignInComponent},
  {path:"signup" , component:SignUpComponent},
  {path:"policy1" , component:Policy1Component},
  {path:"home/policydetail/:PolicyId" , component: PolicydetailComponent,canActivate : [AuthorGuard]},
  {path:"confirmapply" , component:ConfirmapplyComponent},
  


];

@NgModule({
  declarations:[Policy1Component,AdminMainPageComponent,UserMainPageComponent,
    SignInComponent,SignUpComponent,HomePageComponent,PolicydetailComponent,ConfirmapplyComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  exports: [RouterModule,BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  providers: [AuthService],
})
export class AppRoutingModule { }
export const Components =
[
SignInComponent,SignUpComponent,AdminMainPageComponent,UserMainPageComponent,Policy1Component,
PolicydetailComponent,HomePageComponent,ConfirmapplyComponent
];
