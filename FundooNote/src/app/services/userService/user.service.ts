import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;

  constructor(private httpService:HttpService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
return this.httpService.postService(this.base+'/User/register',data,false,
  header);
}
login(data:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': ' application/json'
    })
  }
return this.httpService.postService(this.base+`/User/Login/${data.email}/${data.password}`, {} ,false,header)

}

ForgotPassword(data:any){
  console.log(data)
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.postService(this.base+`/User/ForgetPassword/${data.email}`, {} ,false,header)
}

ResetPassword(data:any,token:any){
  console.log(data)
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
    })
  }
  return this.httpService.putService(this.base+'/User/ChangePassword', data ,true,header)
}
}