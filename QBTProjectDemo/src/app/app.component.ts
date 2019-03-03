import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
                <div>
                    <h1>{{pageHeader}}</h1>
                    <list-pricecompare></list-pricecompare>
                </div>
                `
})
export class AppComponent  { pageHeader = 'Airlines Price Compare'; }
