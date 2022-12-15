import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{

  Date1 : Date = new Date();
  visible:boolean = false
  LocalDate : String = new Date().toLocaleString();
  

constructor(private _service:RegistrationService, private _router :Router){
  
}
lastlogin:string;
currentuser:string;
ngOnInit(){
  this.currentuser=localStorage.getItem('currentuser')?.toString();
  this.lastlogin=localStorage.getItem('lastlogin')?.toString();
}

goToAddUser(){
  this._router.navigate(['/healthasyst/register']);
  
}
viewUser(){
  this._router.navigate(['/healthasyst/userlist']);
  
}
goToLogin(){
  this._router.navigate(['/healthasyst/login']); 
}
onclick(){
  this.visible = !this.visible
}
}
