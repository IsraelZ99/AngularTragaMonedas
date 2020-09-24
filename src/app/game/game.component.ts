import { Component } from '@angular/core';
import { Random } from '../random';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public balls: number[];
  public random: Random;
  public outputMessage: string;
  public nameUser:string;
  public numberPress: number;

  constructor() {
    this.balls = environment.balls;
    this.random = new Random();
    this.nameUser = environment.username;
    this.numberPress = 0;
  }

  playVideogame() {
    this.random.setballs(this.balls);
    this.random.numberRandom();
    this.balls = this.random.getballs();
    this.random.setNumberPress(this.numberPress);
    if(this.random.verifyNumbersWin()) this.numberPress = -1;
    this.random.status();
    this.outputMessage = this.random.getOutputMessage();
    this.numberPress++;
  }

  ngOnInit(): void {
  }

}
