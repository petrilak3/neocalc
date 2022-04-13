import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
    result = "";

    constructor() { }

    clear() { this.result = ""; }

    addCharacter(char:string) { 
        if(this.result == "Nesprávny vstup!") this.result = "";
        this.result += char; 
    }

    calculate() { 
        try {
            this.result = eval(this.result).toFixed(2);
        }
        catch(e) {
            this.result = "Nesprávny vstup!";
        } 
    }

    ngOnInit(): void {
    }

}
