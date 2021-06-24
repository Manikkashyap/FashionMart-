import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor( public userservice:UserService) { }
  id:any;
  userdata:any;
  userinfo:any;

  ngOnInit(): void {
    this.id=this.userservice.getuserId();
    // console.log(this.id)
    this.userservice.display(this.id).subscribe((res)=>{
    this.userdata= res;
    console.log(JSON.stringify(res))
    this.userinfo=this.userdata;
    console.log(this.userinfo);
    })
  }

}
