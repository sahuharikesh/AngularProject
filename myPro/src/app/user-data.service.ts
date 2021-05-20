import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url='http://localhost:3000/users';

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }

  saveUser(data:any){
    // console.warn('Service',data);
    return this.http.post(this.url,data)
  }

  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentUser(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateUser(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
