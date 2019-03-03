import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'airline-class',
    templateUrl: 'app/pricecompare/airlineclass.component.html',
    styleUrls: ['app/pricecompare/airlineclass.component.css']
})
export class AirlineclassComponent {

    selectedRadioButtonValue: string = 'Firstclass';

    @Output()
    RadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    Firstclass: number;

    @Input()
    Economyclass: number;

    @Input()
    Businessclass: number;

    onRadioButtonSelectionChange() {
        this.RadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}