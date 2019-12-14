import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface detailsConfig {
  "source":string,
  "time_stamp":string,
  "utc_date":string,
  "coin_id":string,
  "coin_name":string,
  "last_price":string,
  "price_24hr_pcnt":string,
  "volume_24hr":string,
  "vol_24hr_pcnt":string,
  "currency":string,
  "currency_name":string
}
export interface Config {
  data: Array<detailsConfig>
  
}


@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {
  

  constructor(private http: HttpClient) { }
  configUrl = 'assets/data/currencies.json';
  
  //to get the initial list of coins
  getCryptoCurrencies(){
   return  this.http.get<Config>(this.configUrl).pipe(map(res=> res.data));
  }

  //get the details of coins based on the selection
  getDetails(val) {
    return this.http.get<detailsConfig>('assets/data/currencies'+'/'+val+'.json').pipe(map(res=> res));
  }
}
