import { Component, OnInit } from '@angular/core';
import { IPricecompare } from './pricecompare';
import { PricecompareService } from './pricecompare.service';


@Component({
    selector: 'list-pricecompare',
    templateUrl: 'app/pricecompare/pricecomparelist.component.html',
    styleUrls: ['app/pricecompare/pricecomparelist.component.css'],
    providers: [PricecompareService]
})

export class PricecompareListComponent implements OnInit {
    pricelist: IPricecompare[];
    selectedClassRadioButtonValue: string = 'Firstclass';
    statusMessage: string = 'Loading data.Please wait...';

    constructor(private _pricecompareService: PricecompareService) {
        
    }

    ngOnInit() {
        this._pricecompareService.getPriceToCompare()
            .subscribe((list) => this.pricelist = list,
                (error) => {
                    this.statusMessage = 'Problem with the service. Please try again after sometime';
                    console.error(error);
                });
    }

    onClassRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedClassRadioButtonValue = selectedRadioButtonValue;
    }

    getFirstClassFare(): number {
        return this.pricelist.filter(e => e.airlineclass === "Firstclass").length;
    }

    getEconomyClassFare(): number {
        return this.pricelist.filter(e => e.airlineclass === "Economyclass").length;
    }

    getBusinessClassFare(): number {
        return this.pricelist.filter(e => e.airlineclass === "Busiessclass").length;
    }

    getpricelist(): void {
        var counter = 1;

    this.pricelist = [
        { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 500 },
        { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 600 },
        { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 700 },
        { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 550 },
        { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 650 },
        { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 750 }
        ];
        counter++;
    }

}

