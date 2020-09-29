import { Component } from '@angular/core';
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
export class SpinComponent {

  public balls: number[];

  public numberPress: number;
  public buttonStatus: boolean;

  public Checkers: Checkers;
  public SpinArray: SpinArray;

  constructor(private dataService: DataService) {
    this.balls = environment.balls;
    this.numberPress = 0;
    this.buttonStatus = false;

    this.SpinArray = new SpinArray();
    this.Checkers = new Checkers();
  }

  public playVideogame() {
    this.SpinArray.setBalls(this.balls);
    this.SpinArray.setNumberPress(this.numberPress);
    this.dataService.moneyInMachine.emit(this.SpinArray.insertCoin());
    if (this.SpinArray.verifyPressButton()) this.numberPress = -1;
    this.SpinArray.spinNumbersOfArray();
    this.waitMoveBalls();
  }

  public waitMoveBalls() {
    const contTimer = timer(environment.contTimer);
    contTimer.subscribe(n => {
      this.numberPress++;
      this.buttonStatus = false;
      environment.balls = this.SpinArray.getBalls();
      this.Checkers.setBalls(this.SpinArray.getBalls());
      this.dataService.msgStatusGame.emit(this.Checkers.verifyStatusWinerLoser());
      this.dataService.moneyWin.emit(this.Checkers.getMoneyWin());
    });
    this.dataService.msgStatusGame.emit("");
    this.buttonStatus = true;
  }


}
