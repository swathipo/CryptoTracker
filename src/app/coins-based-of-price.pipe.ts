import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coinsBasedOfPrice'
})
export class CoinsBasedOfPricePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return args[0]/value;
  }

}
