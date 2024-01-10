import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from './user-details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any
  contacts:any;
  userFlag :any;
  dataSearch:any ="";
  constructor(private http : HttpClient,private us : UserDetailsService, private router :Router){}

  ngOnInit(): void {

    this.userFlag = this.us.userDetailsFlag;
    this.us.getUserDetails().subscribe((val)=>{
      this.data = val;
      this.contacts = this.data.results;
      console.log("api val",this.contacts)
    })
  } 
  
  UserDetails(val:any){
    this.us.userDetailsFlag=true;
    this.userFlag = this.us.userDetailsFlag;
    this.us.userData = val;
    this.router.navigate(['/userDetails'])
  }

  onSearchChange(val:Event){
    this.dataSearch = (val.target as HTMLInputElement).value;
  }
}
