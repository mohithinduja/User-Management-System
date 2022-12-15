import { Component ,OnInit} from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  
  user : User[] | undefined;
    constructor(private _service:RegistrationService, private _router :Router ){}
    currentuser:string;
    
    ngOnInit(){
      this._service.fetchUserListFromRemote().subscribe(
        data=>{console.log("response received");
        this.user=data;
      },

        error=>console.log("exception occured")
      )
      this.currentuser=localStorage.getItem('currentuser')?.toString();
    }
    
    goToAddUser(){
      this._router.navigate(['/healthasyst/register']);
      
    }
    goToEditUser(id:any){
console.log("id"+id);
this._router.navigate(['/healthasyst/edituser',id]);

    }
    deleteUserById(id:number){
      // this._router.navigate(['/healthasyst/adminhome']);
        this._service.deleteUserByIdFromRemote(id).subscribe(
          
          data=>{
          this.user=data;
        
          
        },
        
        error => console.log("exception occured")
          
        )
        
      }
      
      goTohome(){
        this._router.navigate(['/healthasyst/adminhome']);
      }
      
     
    

}
