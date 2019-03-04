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
    counter: number = 1;
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
        if (this.counter == 1) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 500 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 600 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 700 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 550 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 650 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 750 }
            ];
        }
        else if (this.counter == 2) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 900 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 1000 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 1100 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 850 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 950 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 1075 }
            ];
        }
        else if (this.counter == 3) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 825 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 970 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 1200 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 875 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 925 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 1150 }
            ];
        }
        else if (this.counter == 4) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 630 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 780 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 1340},
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 560 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 620 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 1280 }
            ];
        }
        else if (this.counter == 5) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 1490 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 1570 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 1800 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 1200 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 1250 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 1500 }
            ];
        }
        else if (this.counter == 6) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 340 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 380 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 420 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 250 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 280 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 500 }
            ];
        }
        else if (this.counter == 7) {
            this.pricelist = [
                { airlinename: 'Quantas Airlines', airlineclass: 'Firstclass', fare: 500 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Economyclass', fare: 600 },
                { airlinename: 'Quantas Airlines', airlineclass: 'Businessclass', fare: 700 },
                { airlinename: 'Virgin Money', airlineclass: 'Firstclass', fare: 550 },
                { airlinename: 'Virgin Money', airlineclass: 'Economyclass', fare: 650 },
                { airlinename: 'Virgin Money', airlineclass: 'Businessclass', fare: 750 }
            ];
            this.counter = 1;
        }
        this.counter += 1;
    }

}

