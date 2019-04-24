import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import User from '../../models/User'
import Move from 'src/app/models/Move';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  moves: Move[];
  user: User;
  bitcoinRate: number;
  constructor(private userService: UserService, private bitcoinService: BitcoinService, private router: Router) { }

  ngOnInit() {
    this.userService.userSubject.subscribe((user) => {
      this.user = user;

      if (this.user) {
        this.bitcoinService.rateSubject.subscribe((rate) => {
          this.bitcoinRate = rate * this.user.coins;
        })
        this.bitcoinService.getRate()

        let len = this.user.moves.length;
        this.moves = this.user.moves.slice(len - 3, len);
      }
    })
  }
}
