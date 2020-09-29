import { Component } from '@angular/core';
import { timer } from 'rxjs'

import { Machine } from '../machine';
import { SpinArray } from '../spinArray';
import { Checkers } from '../checker';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {

  public balls: number[];
  public outputMessage: string;
  public nameUser: string;
  public numberPress: number;
  public moneyWin: number;
  public buttonStatus: boolean;
  public moneyMachine: number;
  
  public Machine: Machine;
  public SpinArray:SpinArray;
  public Checkers:Checkers;

  constructor() {
    this.balls = environment.balls;
    this.numberPress = 0;
    this.buttonStatus = false;
    this.moneyMachine = environment.moneyMachine;
    this.outputMessage = environment.msgWinnerLoser;
    this.Machine = new Machine();
    this.SpinArray = new SpinArray();
    this.Checkers = new Checkers();
  }

  playVideogame() {
    this.Machine.setballs(this.balls);
    this.SpinArray.setBalls(this.balls);
    this.Machine.setNumberPress(this.numberPress); 
    this.SpinArray.setNumberPress(this.numberPress);
    if (this.Machine.verifyPressButton()) this.numberPress = -1;
    this.SpinArray.setPressRandom(this.Machine.getPressRandom());
    this.SpinArray.spinNumbersOfArray();
    this.waitMoveBalls();
  }

  public winnerLoser(): boolean {
    return (this.outputMessage === "FELICIDADES GANASTE") ? (true) : (false);
  }


  public waitMoveBalls() {
    const contTimer = timer(environment.contTimer);
    contTimer.subscribe(n => {
      this.Machine.verifyStatusWinnerLoser();
      this.moneyWin = this.Machine.getMoneyWin();
      this.outputMessage = this.Machine.getOutputMessage();
      this.numberPress++;
      this.buttonStatus = false;
      this.moneyMachine = environment.moneyMachine;
    });
    this.outputMessage = "";
    this.buttonStatus = true;
  }


  ngOnInit(): void {

  }

}
