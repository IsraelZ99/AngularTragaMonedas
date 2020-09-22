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

  constructor() {
    this.bolitas = [0, 0, 0, 0];
    this.aleatorio = new Aleatorio();
  }

  jugar() {
    this.aleatorio.setBolitas(this.bolitas);
    this.aleatorio.numeroAleatorio();
    this.bolitas = this.aleatorio.getBolitas();
  }

  ngOnInit(): void {
  }

}
