import { identifierName } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user=new User();
constructor(private _route:Router,private _service:RegistrationService, private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  let id=(this._activatedRoute.snapshot.paramMap.get('id'));
  this._service.fetchUserByIdFromRemote(id).subscribe(
    data=>{
        console.log("data received");
        this.user=data;
    },
    error=>console.log("Exception occured")
  )
}
updateRegisterUser()
{
  this._service.updateUserFromRemote(this.user).subscribe(
  data=>{
console.log("data added successful");
this._route.navigate(['/healthasyst/userlist']);

  },
  error=>console.log("error")
  )
}
goToUserList(){
  this._route.navigate(['/healthasyst/userlist']);
}
}
