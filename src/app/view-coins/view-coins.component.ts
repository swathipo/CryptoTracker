import { Component, OnInit } from '@angular/core';
import {CryptoServiceService} from '../crypto-service.service'

@Component({
  selector: 'app-view-coins',
  templateUrl: './view-coins.component.html',
  styleUrls: ['./view-coins.component.less']
})
export class ViewCoinsComponent implements OnInit {
public coins: any;
  constructor(private _cryptoService: CryptoServiceService) { }

  ngOnInit() {
    this.coins = this._cryptoService.getCryptoCurrencies();
      
  }


}
