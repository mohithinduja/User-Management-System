import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit  {

  
    user : User[] | undefined;
    constructor(private _service:RegistrationService, private _router :Router ){}
    currentuser:string;
    firstname:string;
    lastname:string;
    emailId:string;
  
  ngOnInit(){
    
    this._service.fetchUserListFromRemote().subscribe(
      data=>{console.log("response received");
      this.user=data;
    },
  
      error=>console.log("exception occured")
    )
    this.currentuser=localStorage.getItem('currentuser')?.toString();
    this.firstname=localStorage.getItem('firstname')?.toString();
    this.lastname=localStorage.getItem('lastname')?.toString();
    this.emailId=localStorage.getItem('emailId')?.toString();
    
  }
  goToLogin(){
    this._router.navigate(['/healthasyst/login']); 
  }
  goTohome()
  {
    this._router.navigate(['/healthasyst/userhome']); 
  }
  }

