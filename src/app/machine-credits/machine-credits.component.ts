import { Component, OnInit } from '@angular/core';
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

  public buyCredits(): void {
    if (!isNaN(this.numberCredits)) {
      this.getCredits();
      if (isNaN(this.getNumberCredits)) {
        this.dataService.boughtCredits.emit(this.numberCredits);
        this.numberCredits = 0;
      } else {
        this.dataService.boughtCredits.emit(this.getNumberCredits + this.numberCredits);
        this.numberCredits = 0;
      }
    }
  }

  public checkKeyNumber(): boolean {
    return (this.numberCredits > 0) ? (true) : (false);
  }

  public goToBuyCredits() {
    if (this.checkKeyNumber()) {
      this.buyCredits();
    }
  }

  public getCredits(): void {
    this.dataService.boughtCredits.subscribe(money => {
      this.getNumberCredits = (isNaN(money)) ? (0) : (money);
    });
  }

}
