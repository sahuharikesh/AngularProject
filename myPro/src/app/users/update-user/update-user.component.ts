import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router' //use to get id from routes
import {UserDataService} from '../../user-data.service'


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router:ActivatedRoute,private user:UserDataService) { }
  alert:boolean=false
  editUser=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  })
  ngOnInit(): void {
    this.user.getCurrentUser(this.router.snapshot.params.id).subscribe((data:any)=>{
      this.editUser=new FormGroup({
        name:new FormControl(data.name),
        email:new FormControl(data.email)
      })
    })
  }

  collection(){
  this.user.updateUser(this.router.snapshot.params.id,this.editUser.value).subscribe(result=>{
    console.log("Updated");
    this.alert=true

  })
  this.editUser.reset({}) //to blank the form

  }
  closeAlert(){
    this.alert=false
  }

}
