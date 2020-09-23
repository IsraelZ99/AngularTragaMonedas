import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Random } from '../random';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public balls: number[];
  public random: Random;
  public outputMessage: string;

  constructor() {
    this.balls = [0, 0, 0, 0];
    this.random = new Random();
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
