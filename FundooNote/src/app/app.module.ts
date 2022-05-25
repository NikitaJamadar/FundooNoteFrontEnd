import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, Validators, FormBuilder, FormsModule,  } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GetAllNoteComponent } from './component/get-all-note/get-all-note.component';
import { DisplayComponent } from './component/display/display.component';
import { UpdateComponent } from './component/update/update.component';
import { IconsComponent } from './component/icons/icons.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { AuthGuard } from './auth/auth.guard';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetAllNoteComponent,
    DisplayComponent,
    UpdateComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    FilterPipe,
        
    
    
   
  ],
  imports: [
    BrowserModule,MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
   FlexLayoutModule ,
   MatCardModule,
   MatToolbarModule,
   MatSelectModule,
   MatCheckboxModule,
   MatButtonModule,
   AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule,
   MatSidenavModule,
   LayoutModule,
   MatListModule,
   MatIconModule,
   MatMenuModule,
   MatSnackBarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
