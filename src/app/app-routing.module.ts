import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'healthasyst/viewuser',component:ViewuserComponent
  },
  {
    path:'healthasyst/viewprofile',component:ViewprofileComponent
  },
  {
    path:'healthasyst/viewprofile/:id',component:ViewprofileComponent
  },
{
  path:'healthasyst/edituser',component:EdituserComponent
},
{
  path:'healthasyst/edituser/:id',component:EdituserComponent
},
{
  path:'healthasyst/adminhome',component:AdminhomeComponent
},
  {
    path:'healthasyst/login',component:LoginComponent
  },
  
  {
    path:'healthasyst/register',component:RegistrationComponent
  },
  {
    path:'healthasyst/userlist',component:UserlistComponent
  },
  {
    path:'healthasyst/userhome',component:UserhomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
