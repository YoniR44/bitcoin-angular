import { Component, OnInit, Input } from '@angular/core';
import Move from 'src/app/models/Move';
import * as moment from 'moment';

@Component({
  selector: 'move-item',
  templateUrl: './move-item.component.html',
  styleUrls: ['./move-item.component.scss']
})
export class MoveItemComponent implements OnInit {
  @Input() move: Move;
  constructor() { }

  ngOnInit() { }

  getTime(time) {
    return moment(time.at).format('L, LT');
  }
}
