import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import MarketPrice from '../models/MarketPrice'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  rateSubject = new BehaviorSubject<number>(null);
  marketPriceSubject = new BehaviorSubject<MarketPrice>(null);
  transactionSubject = new BehaviorSubject<MarketPrice>(null);

  public getRate(): void {
    this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=1`)
      .subscribe((data) => {
        this.rateSubject.next(data);
      })
  }

  public getMarketPrice() {
    this.http.get<MarketPrice>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      .subscribe((res) => {
        let marketPrice = new MarketPrice(res.name, res.values.map(point => ['', point.y]), res.description)
        this.marketPriceSubject.next(marketPrice);
      })
  }

  public getConfirmedTransactions(): any {
    this.http.get<MarketPrice>('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
      .subscribe((res) => {
        let marketPrice = new MarketPrice(res.name, res.values.map(point => ['', point.y]), res.description)
        this.transactionSubject.next(marketPrice);
      })
  }
  constructor(private http: HttpClient) {
    this.getMarketPrice();
    this.getConfirmedTransactions();
  }
}
