import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersRoutingModule} from './users-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent
  ]
})
export class UsersModule { }
