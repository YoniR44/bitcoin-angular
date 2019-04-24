import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User = null;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.userSubject.subscribe((user)=>{
      this.user = user;
    })
  }

}
