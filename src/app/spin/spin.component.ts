import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs'

import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { SpinArray } from "../spinArray";
import { Checkers } from '../checker';


@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})

export class SpinComponent implements OnInit {

  public balls: number[];
  public numberPress: number;
  public buttonStatus: boolean;
  public creditsToEnter: number;
  public buttonInsertCreditStatu: boolean;
  public getCreditsToEnter: number;

  public Checkers: Checkers;
  public SpinArray: SpinArray;

  constructor(private dataService: DataService) {
    this.balls = environment.balls;
    this.numberPress = 0;
    this.buttonInsertCreditStatu = true;
    this.buttonStatus = true;
    this.SpinArray = new SpinArray();
    this.Checkers = new Checkers();
  }

  ngOnInit(): void {
    this.observable();
    this.insertCredits();
  }

  public playVideogame(): void {
    console.log("Hay acualmente de creditos :" + this.getCreditsToEnter);
    if ((this.getCreditsToEnter) > 0) {
      this.deductCredit();
      this.SpinArray.setBalls(this.balls);
      this.SpinArray.setNumberPress(this.numberPress);
      this.dataService.moneyInMachine.emit(this.SpinArray.insertCoin());
      if (this.SpinArray.verifyPressButton()) this.numberPress = -1;
      this.SpinArray.spinNumbersOfArray();
      this.waitMoveBalls();
    } else {
      this.buttonStatus = true;
    }
  }

  public waitMoveBalls(): void {
    const contTimer = timer(environment.contTimer);
    contTimer.subscribe(n => {
      this.numberPress++;
      this.buttonStatus = (this.getCreditsToEnter === 0) ? (true) : (false);
      environment.balls = this.SpinArray.getBalls();
      this.Checkers.setBalls(this.SpinArray.getBalls());
      this.dataService.msgStatusGame.emit(this.Checkers.verifyStatusWinerLoser());
      this.dataService.moneyWin.emit(this.Checkers.getMoneyWin());
    });
    this.dataService.msgStatusGame.emit("");
    this.buttonStatus = true;
  }

  public observable(): void {
    this.dataService.boughtCredits.subscribe(credits => {
      this.getCreditsToEnter = credits;
    });
  }


  public insertCredits(): void {
    this.dataService.boughtCredits.subscribe(credits => {
      if (isNaN(credits) || credits <= 0) {
        this.buttonStatus = true;
        this.buttonInsertCreditStatu = true;
      } else {
        this.buttonStatus = false;
        this.buttonInsertCreditStatu = false;
      }
    });

    /*if (isNaN(this.getCreditsToEnter)) {
      this.buttonStatus = true;
    } else if (this.getCreditsToEnter >= 0) {
      this.buttonStatus = false;
      this.buttonInsertCreditStatu = false;
    }*/

  }

  public deductCredit(): void {
    if (this.getCreditsToEnter > 0) {
      this.dataService.boughtCredits.emit(this.getCreditsToEnter - 1);
    }

  }

}
