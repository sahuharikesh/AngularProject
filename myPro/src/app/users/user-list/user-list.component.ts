import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../user-data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data:any=[];
  constructor(private user:UserDataService){}

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      this.data=data
      console.log(data)
    })
  }
  deleteUser(item:any){
    this.user.deleteUser(item).subscribe(result=>{
      console.log("deleted")
      this.data.splice(item-1,1)  // to remove from table
    })
  }
}
