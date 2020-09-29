import { Component } from '@angular/core';
import { timer } from 'rxjs'

import { SpinArray } from "../spinArray";
import { environment } from 'src/environments/environment';
import { Checkers } from '../checker';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent {

  public balls: number[];

  public numberPress: number;
  public SpinArray: SpinArray;
  public buttonStatus: boolean;

  public Checkers: Checkers;

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
      this.dataService.msgStatusGame$.emit(this.Checkers.verifyStatusWinerLoser());
      this.dataService.dinnerWin$.emit(this.Checkers.getMoneyWin());
    });
    this.buttonStatus = true;
  }

  ngOnInit(): void {
  }

}
