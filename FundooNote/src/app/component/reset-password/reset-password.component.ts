import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  ResetPasswordForm !: FormGroup;
  submitted = false;
  token:any

  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder ,private activeRoute:ActivatedRoute,private user:UserService) { }

  ngOnInit(): void {
    this.ResetPasswordForm = this.formBuilder.group({
     
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  });
  this.token = this.activeRoute.snapshot.paramMap.get('token');
  console.log(this.token);
  }
  onSubmit() {

console.log("inside submit")
if(this.ResetPasswordForm.valid){
  console.log("valid data",this.ResetPasswordForm.value);
  let data={
    newPassword:this.ResetPasswordForm.value.newPassword,
    confirmPassword:this.ResetPasswordForm.value.confirmPassword
  }
  this.user.ResetPassword(data,this.token).subscribe((res:any)=>{console.log(res);
    this._snackBar.open('Password reset successfully', '', {
      duration:2000,
     });   
   },error=>{
     this._snackBar.open('please enter correct data', '', {
       duration:2000,
      });   
   }
   ); 
 }
else
{
  console.log("enter data");
}
}
  }
