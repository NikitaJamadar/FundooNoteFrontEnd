import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
    
      email:['',Validators.required],
      password:['',Validators.required]   
  });
   
  }
  onSubmit() {
    this.submitted=true;
    console.log("inside submit")
    if(this.LoginForm.valid){
      console.log("valid data",this.LoginForm.value)
      let data={
        email:this.LoginForm.value.email,
        password:this.LoginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{console.log(res.token);
        localStorage.setItem('token',res.token)
        
        this._snackBar.open('Login successfully', '', {
         duration:2000,
        });   
      },error=>{
        this._snackBar.open('please enter correct data', '', {
          duration:2000,
         });   
      }
      ); 
    }
    else{
      console.log("Invalid data",this.LoginForm.value);
    }
      }
    }