import { Component, OnInit, Input } from '@angular/core';
import Move from 'src/app/models/Move';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent   {

  @Input() title: string;
  @Input() moves: Move[];
}
