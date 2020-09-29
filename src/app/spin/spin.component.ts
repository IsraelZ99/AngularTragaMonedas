import { Component } from '@angular/core';
import { timer } from 'rxjs'

import { SpinArray } from "../spinArray";
import { environment } from 'src/environments/environment';
import { Checkers } from '../checker';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent {

  public balls: number[];
  public outputMessage: string;

    public getOutputMessage(): string {
        return this.outputMessage;
    }

    public setOutputMessage(outputMessage: string): void {
        this.outputMessage = outputMessage;
    }

  public numberPress: number;
  public SpinArray: SpinArray;
  public buttonStatus: boolean;
  public moneyMachine: number;
  public winner:boolean;
  public loser:boolean;

  public Checkers:Checkers;

  constructor() {
    this.balls = environment.balls;
    this.numberPress = 0;
    this.buttonStatus = false;
    
    this.SpinArray = new SpinArray();
    this.Checkers = new Checkers();
  }

  public playVideogame(){
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
      this.outputMessage = this.Checkers.verifyStatusWinerLoser();
    });
    this.outputMessage = "";
    environment.msgWinnerLoser="";
    this.buttonStatus = true;
  }

  ngOnInit(): void {
  }

}
