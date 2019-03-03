"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pricecompare_service_1 = require("./pricecompare.service");
var PricecompareListComponent = (function () {
    function PricecompareListComponent(_pricecompareService) {
        this._pricecompareService = _pricecompareService;
        this.selectedClassRadioButtonValue = 'Firstclass';
        this.statusMessage = 'Loading data.Please wait...';
    }
    PricecompareListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pricecompareService.getPriceToCompare()
            .subscribe(function (list) { return _this.pricelist = list; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    PricecompareListComponent.prototype.onClassRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedClassRadioButtonValue = selectedRadioButtonValue;
    };
    PricecompareListComponent.prototype.getFirstClassFare = function () {
        return this.pricelist.filter(function (e) { return e.airlineclass === "Firstclass"; }).length;
    };
    PricecompareListComponent.prototype.getEconomyClassFare = function () {
        return this.pricelist.filter(function (e) { return e.airlineclass === "Economyclass"; }).length;
    };
    PricecompareListComponent.prototype.getBusinessClassFare = function () {
        return this.pricelist.filter(function (e) { return e.airlineclass === "Busiessclass"; }).length;
    };
    PricecompareListComponent.prototype.getpricelist = function () {
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
    };
    return PricecompareListComponent;
}());
PricecompareListComponent = __decorate([
    core_1.Component({
        selector: 'list-pricecompare',
        templateUrl: 'app/pricecompare/pricecomparelist.component.html',
        styleUrls: ['app/pricecompare/pricecomparelist.component.css'],
        providers: [pricecompare_service_1.PricecompareService]
    }),
    __metadata("design:paramtypes", [pricecompare_service_1.PricecompareService])
], PricecompareListComponent);
exports.PricecompareListComponent = PricecompareListComponent;
//# sourceMappingURL=pricecomparelist.component.js.map