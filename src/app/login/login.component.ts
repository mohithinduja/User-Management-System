import { formatDate, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import {User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   user = new User();
  msg='';
   constructor(private _service: RegistrationService, private _router :Router){}
  ngOnInit(){

  }
  userdata:any;
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(data => {console.log("response received");
    
    this.userdata=data;
    localStorage.setItem("currentuser",this.userdata.firstName+' '+this.userdata.lastName);
    localStorage.setItem("emailId",this.userdata.email);
    localStorage.setItem("mobileNo",this.userdata.mobileNo);
    localStorage.setItem("firstname",this.userdata.firstName);
    localStorage.setItem("lastname",this.userdata.lastName);
    localStorage.setItem("lastlogin",formatDate(this.userdata.lastLogin,' hh:mm:ss a , dd-MM-yyyy','en'));
    
    
if(this.userdata.userType=="Admin"){
  this._router.navigate(['/healthasyst/adminhome'])
}else if(this.userdata.userType=="User"){
  this._router.navigate(['/healthasyst/userhome'])
}else{
  alert("Login Failed");
}

  },
    error => {console.log("exception occured")
    this.msg="bad credentials, please enter correct emailid and password";
})}
goToWelcome(){
  this._router.navigate(['/']); 
}
  
}


