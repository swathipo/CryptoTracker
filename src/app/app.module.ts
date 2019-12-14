import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCoinsComponent } from './view-coins/view-coins.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CoinsBasedOfPricePipe } from './coins-based-of-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewCoinsComponent,
    ViewDetailsComponent,
    CoinsBasedOfPricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
