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

  constructor() {
    this.balls = environment.balls;
    this.random = new Random();
    this.nameUser = environment.username;
  }

  playVideogame() {
    this.random.setballs(this.balls);
    this.random.numberRandom();
    this.random.status();
    this.balls = this.random.getballs();
    this.outputMessage = this.random.getOutputMessage();
  }

  ngOnInit(): void {
  }

}
