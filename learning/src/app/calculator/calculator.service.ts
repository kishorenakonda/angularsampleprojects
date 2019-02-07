import { Injectable } from "@angular/core";

@Injectable()
export class CalculatorService {
    constructor() { }
    ngOnInit() { }

    amount: Number;
    stringamount: string;
    simpleIntrest: Number;
    totalamount : Number;

    getCalculate(pamount, rate, months) {
        this.amount = (pamount * rate * months);
        this.simpleIntrest = ( (pamount * months) / 100 );
        this.totalamount = this.simpleIntrest + pamount;
    }
}