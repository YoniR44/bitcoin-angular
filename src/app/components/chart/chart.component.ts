import { Component, OnInit, Input } from '@angular/core';
import MarketPrice from 'src/app/models/MarketPrice';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  {

  @Input() marketPrice: MarketPrice;
  @Input() transactions: MarketPrice;
}
