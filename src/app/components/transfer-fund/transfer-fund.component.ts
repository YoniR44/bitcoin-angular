import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import Contact from '../../models/Contact';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  transferAmount: number;
  @Input() contact: Contact
  constructor(private userService: UserService) { }

  ngOnInit() { }

  onTransfer(e) {
    e.preventDefault();
    this.userService.addMove(this.contact, this.transferAmount);
  }

}
