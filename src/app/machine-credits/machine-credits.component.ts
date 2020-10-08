import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-machine-credits',
  templateUrl: './machine-credits.component.html',
  styleUrls: ['./machine-credits.component.css']
})
export class MachineCreditsComponent implements OnInit {

  public numberCredits: number;
  public getNumberCredits: number;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.buyCredits();
  }

  public buyCredits(): number {
    if ((this.numberCredits % 1) === 0) {
      if (!isNaN(this.numberCredits)) {
        this.getCredits();
        if (isNaN(this.getNumberCredits)) {
          this.dataService.boughtCredits.emit(this.numberCredits);
          this.numberCredits = 1;
        } else {
          this.dataService.boughtCredits.emit(this.getNumberCredits + this.numberCredits);
          this.numberCredits = 1;
        }
      }
    } else this.numberCredits = 0;
    console.log(this.numberCredits);
    return this.numberCredits;
  }

  public checkKeyNumber(): boolean {
    return (this.numberCredits > 0) ? (true) : (false);
  }

  public goToBuyCredits() {
    let check = this.checkKeyNumber();
    if (check) {
      this.buyCredits();
    }
  }

  public getCredits(): void {
    this.dataService.boughtCredits.subscribe(money => {
      this.getNumberCredits = (isNaN(money)) ? (0) : (money);
    });
  }

}

let data = new DataService;
let match = new MachineCreditsComponent(data);
let check = match.checkKeyNumber();
let goBuy = match.goToBuyCredits();
let buy = match.buyCredits();

