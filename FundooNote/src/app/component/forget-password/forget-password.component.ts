import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.formBuilder.group({
      email:['',Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ForgetPasswordForm.valid) {
      console.log("valid data", this.ForgetPasswordForm.value);
      let data={
        email:this.ForgetPasswordForm.value.email,
      }
      this.user.ForgotPassword(data).subscribe((res:any)=>{console.log('Reset link sent successfully',res);})
    }
    
      else{
      console.log("Invalid data", this.ForgetPasswordForm.value);
    }
  }
}