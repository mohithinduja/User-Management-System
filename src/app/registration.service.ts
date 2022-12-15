import { Injectable } from '@angular/core';
import { User } from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User): Observable<object>{
return this._http.post("http://localhost:8085/healthasyst/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/healthasyst/registeruser",user);
  }
  public updateUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/healthasyst/updateuser",user);
  }
  

  handleError(error:Response){

  }

  fetchUserListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8085/healthasyst/getuserlist")
  }
  fetchUserByIdFromRemote(id:any):Observable<any>{
    return this._http.get<any>("http://localhost:8085/healthasyst/getuserbyid/"+id)
  }
  deleteUserByIdFromRemote(id:any):Observable<any>{
    return this._http.delete<any>("http://localhost:8085/healthasyst/deleteuserbyid/"+id)
  }
}
