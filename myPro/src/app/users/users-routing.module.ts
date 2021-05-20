import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../users/login/login.component';
import {UserListComponent} from '../users/user-list/user-list.component';
import {AddUserComponent} from '../users/add-user/add-user.component';
import {UpdateUserComponent} from '../users/update-user/update-user.component';
const routes: Routes = [
{
  path:'user',children:[
    { path:'login',component:LoginComponent},
    { path:'list',component:UserListComponent},
    { path:'add-user',component:AddUserComponent},
    { path:'update/:id',component:UpdateUserComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  UsersRoutingModule { }
