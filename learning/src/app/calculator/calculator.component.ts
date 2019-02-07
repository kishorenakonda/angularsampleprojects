import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  constructor(private calculatorService : CalculatorService) {
  }

  months : Number;
  rate : Number;
  principalamount : Number;
  amount : Number;
  totalamount : Number;
  ngOnInit() {
    
  }

  calculate(){
    this.calculatorService.getCalculate(this.principalamount,this.rate,this.months);
    // this.amount = this.calculatorService.amount;
    this.amount = this.calculatorService.simpleIntrest;
    this.totalamount = this.calculatorService.totalamount;
  }
  
}
