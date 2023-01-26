import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserSrvCmptComponent } from './user-srv-cmpt/user-srv-cmpt.component';
//import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule } from '@angular/forms';
//import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

//import { PolicydetailComponent } from './policydetail/policydetail.component';
@NgModule({
  declarations: [
    AppComponent,
    UserSrvCmptComponent,
          
         // PolicydetailComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // HttpClientModule,
    BrowserAnimationsModule,
    //RouterModule
    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi :true
}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
