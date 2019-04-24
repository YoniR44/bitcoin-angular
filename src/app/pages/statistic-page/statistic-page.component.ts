import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service'
import MarketPrice from 'src/app/models/MarketPrice';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  marketPrice: MarketPrice;
  transactions: MarketPrice;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.bitcoinService.marketPriceSubject.subscribe((data)=> {
      this.marketPrice = data;
    })

    this.bitcoinService.transactionSubject.subscribe((data) => {
      this.transactions = data;
    })
  }

}
