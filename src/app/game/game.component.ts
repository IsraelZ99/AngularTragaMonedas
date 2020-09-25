import { Component } from '@angular/core';
import { interval, timer } from 'rxjs'
import { take } from 'rxjs/operators';

import { Machine } from '../machine';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public balls: number[];
  public Machine: Machine;
  public outputMessage: string;
  public nameUser: string;
  public numberPress: number;
  public moneyWin: number;
  public buttonStatus: boolean;
  public moneyMachine: number;

  constructor() {
    this.balls = environment.balls;
    this.Machine = new Machine();
    this.nameUser = environment.username;
    this.numberPress = 0;
    this.buttonStatus = false;
    this.moneyMachine = environment.moneyMachine;
  }

  playVideogame() {
    this.Machine.setballs(this.balls);
    this.Machine.numberRandom();
    this.balls = this.Machine.getballs();
    this.Machine.setNumberPress(this.numberPress);
    if (this.Machine.verifyNumbersWin()) this.numberPress = -1;
    this.Machine.spin();
    this.wait();
  }

  public winnerLoser(): boolean {
    return (this.outputMessage === "FELICIDADES GANASTE") ? (true) : (false);
  }


  public wait() {
    const contTimer = timer(environment.contTimer);
    contTimer.subscribe(n => {
      this.Machine.status();
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
