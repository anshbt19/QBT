import { Injectable } from '@angular/core';
import { IPricecompare } from './pricecompare';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class PricecompareService {

    constructor(private _http: Http) {

    }

    getPriceToCompare(): Observable<IPricecompare[]> {
        return this._http.get("http://localhost:58596/api/pricecompare/")
            .map((response: Response) => <IPricecompare[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error)
    }
}