import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllNoteComponent } from './component/get-all-note/get-all-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  {path: `register`,component:RegistrationComponent},
  {path:`log-in`,component:LoginComponent},
  {path:`forgetpassword`,component:ForgetPasswordComponent},
  {path:`Resetpassword/:token`,component:ResetPasswordComponent},
 
  {path: 'Dashboard', canActivate:[AuthGuard] ,component:DashboardComponent,
   children:[
    {path:'notes',component:GetAllNoteComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent}
   ]}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }