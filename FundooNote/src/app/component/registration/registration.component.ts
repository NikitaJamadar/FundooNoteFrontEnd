import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ,private user:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log("inside submit")
    if(this.registerForm.valid){
      console.log("valid data",this.registerForm.value);
      let data={
        firstName:this.registerForm.value.firstName,
          lastName: this.registerForm.value.lastName,  
          email: this.registerForm.value.email,
          registerdDate: "2022-05-12T03:23:40.844Z",
          password: this.registerForm.value.password,
          address: "Mulaj",
          
        
      }
      this.user.registration(data).subscribe((res:any)=>{
      console.log(res);
      this._snackBar.open('Registration successful', '', {
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
      console.log("Invalid data",this.registerForm.value);
    }
      }
    }

