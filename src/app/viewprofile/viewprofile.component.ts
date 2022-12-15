import { Component,OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit{

  currentuser:string;

  emailId:string;
  mobileNo:string;
user=new User();
constructor(private _route:Router,private _service:RegistrationService, private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  
  this._service.fetchUserListFromRemote().subscribe(
    data=>{console.log("response received");
    this.user=data;
    
    
  },

    error=>console.log("exception occured")
  )
  this.currentuser=localStorage.getItem('currentuser')?.toString();
  

  this.emailId=localStorage.getItem('emailId')?.toString();
  this.mobileNo=localStorage.getItem('mobileNo')?.toString();

}

goTohome(){
  this._route.navigate(['/healthasyst/userhome']); 
}
}
