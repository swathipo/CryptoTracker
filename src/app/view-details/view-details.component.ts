import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CryptoServiceService} from '../crypto-service.service';
import {switchMap, finalize} from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.less']
})
export class ViewDetailsComponent implements OnInit {
  details: object;
  constructor(private activatedroute: ActivatedRoute,private router : Router, private _cryptoServiceService : CryptoServiceService) { }

  ngOnInit() {
   this.activatedroute.queryParamMap.pipe(
     switchMap(param=> {
       if(param.get('currency')) {
        return this._cryptoServiceService.getDetails(param.get('currency'));
       }
       else {
          return empty;
       }
     
   }),
   finalize(()=> this.router.navigate(['/view']))
  )
  .subscribe(
    (data)=> {
      this.details = data ;
    },
    (error)=> {
      console.log(error);
    }
  )
   

  }

}
