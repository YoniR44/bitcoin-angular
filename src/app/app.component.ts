import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import User from './models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'my-angular';
  user:User;

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit() {

    this.userService.userSubject.subscribe((user) => {
      this.user = user;

      if(!this.user) {
        this.router.navigateByUrl(`/signup`);
      }
    });
  }
}
