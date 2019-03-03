import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PricecompareListComponent } from './pricecompare/pricecomparelist.component';
import { AirlineclassComponent } from './pricecompare/airlineclass.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule ],
    declarations: [AppComponent, PricecompareListComponent, AirlineclassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
