import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Aleatorio } from '../aleatorio';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public bolitas: number[];
  public aleatorio: Aleatorio;
  public outputMessage: string;

  constructor() {
    this.bolitas = [0, 0, 0, 0];
    this.aleatorio = new Aleatorio();
  }

  jugar() {
    this.aleatorio.setBolitas(this.bolitas);
    this.aleatorio.numeroAleatorio();
    this.aleatorio.status();
    this.bolitas = this.aleatorio.getBolitas();
    this.outputMessage = this.aleatorio.getOutputMessage();
  }

  ngOnInit(): void {
  }

}
