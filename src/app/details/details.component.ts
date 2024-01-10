import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  data:any;
  constructor( private us : UserDetailsService,private router :Router){}

  ngOnInit() :void{
    this.data = this.us.userData;

    console.log("userdata ", this.data)
  }

  return(){
    this.us.userDetailsFlag=false;
    this.us.userData={}
    this.router.navigate(["/"])
  }
}
