import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserDataService} from '../../user-data.service'


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private user:UserDataService) { }
  alert:boolean=false
  addUser=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  })

  ngOnInit(): void {
  }
  collectUser(){
    this.user.saveUser(this.addUser.value).subscribe((data)=>{
      console.log('Data Added',data);
      this.alert=true
    })
    this.addUser.reset({}) //to blank the form
  }
  closeAlert(){
    this.alert=false //for close button
  }

}
