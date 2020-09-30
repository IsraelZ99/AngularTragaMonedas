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
  public numberPressInsertCoin: number;
  public getCreditsToEnter: number;

  public Checkers: Checkers;
  public SpinArray: SpinArray;

  constructor(private dataService: DataService) {
    this.balls = environment.balls;
    this.numberPress = 0;
    this.numberPressInsertCoin = 0;
    //this.buttonInsertCreditStatu = false;
    this.SpinArray = new SpinArray();
    this.Checkers = new Checkers(this.dataService);
  }

  ngOnInit(): void {
    this.observable();
    this.insertCredits();
    if(this.getCreditsToEnter <= 0){
      this.buttonStatus = true;
      this.buttonInsertCreditStatu = true;
    }
  }

  public playVideogame(): void {
    if (this.getCreditsToEnter > 0) {
      this.SpinArray.setBalls(this.balls);
      this.SpinArray.setNumberPress(this.numberPress);
      this.dataService.moneyInMachine.emit(this.SpinArray.insertCoin());
      if (this.SpinArray.verifyPressButton()) this.numberPress = -1;
      this.SpinArray.spinNumbersOfArray();
      this.waitMoveBalls();
    } else {
      this.buttonStatus = true;
      this.buttonInsertCreditStatu = true;
    }
  }

  public waitMoveBalls(): void {
    const contTimer = timer(environment.contTimer);
    contTimer.subscribe(n => {
      this.numberPress++;
      this.buttonStatus = false;
      environment.balls = this.SpinArray.getBalls();
      this.Checkers.setBalls(this.SpinArray.getBalls());
      this.dataService.msgStatusGame.emit(this.Checkers.verifyStatusWinerLoser());
      this.dataService.moneyWin.emit(this.Checkers.getMoneyWin());
      //this.dataService.boughtCredits.emit(this.getCreditsToEnter - 1);
    });
    this.deductCredit();
    this.dataService.msgStatusGame.emit("");
    this.buttonStatus = true;

  }

  public observable() {
    this.dataService.boughtCredits.subscribe(credits => {
      this.getCreditsToEnter = credits;
    });
  }


  public insertCredits() {
    if (isNaN(this.getCreditsToEnter)) {
      this.buttonStatus = true;
    } else if (this.getCreditsToEnter > 0) {
      this.buttonStatus = false;
      this.buttonInsertCreditStatu = false;
      this.numberPressInsertCoin++;
      this.creditsToEnter = 0;
    }

  }

  public deductCredit() {
    if (this.getCreditsToEnter > 0) {
      this.dataService.boughtCredits.emit(this.getCreditsToEnter - 1);
    }

  }



}
