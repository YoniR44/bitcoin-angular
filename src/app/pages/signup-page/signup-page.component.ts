import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  name: string = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  onSignup() {
    this.userService.signup(this.name);
    this.router.navigateByUrl(``);
  }

}
