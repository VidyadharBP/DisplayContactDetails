import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userData:any;
  userDetailsFlag: any;
  constructor(private http : HttpClient) {
    this.userDetailsFlag=false;
   }

  getUserDetails(){
    return this.http.get("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in")
  }

}
