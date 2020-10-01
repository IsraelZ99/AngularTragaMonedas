import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-status-game',
  templateUrl: './status-game.component.html',
  styleUrls: ['./status-game.component.css']
})

export class StatusGameComponent implements OnInit {

  public msgStatusGame: string;
  public moneyWin: number;

  constructor(private dataService: DataService) {
    this.msgStatusGame = "Status del Videojuego";
    this.moneyWin = 0;
  }

  ngOnInit(): void {
    this.listenCredits();
    this.showMsgStatusGame();
    this.showMoneyWin();
  }

  public showMsgStatusGame(): void {
    this.dataService.msgStatusGame.subscribe(text => {
      this.msgStatusGame = text;
    });
  }

  public showMoneyWin(): void {
    this.dataService.moneyWin.subscribe(money => {
      this.moneyWin = money;
    });
  }

  public listenCredits(): void{
    this.dataService.boughtCredits.subscribe(credits => {
      this.msgStatusGame = (credits <= 0) ? ("Status del Videojuego") : ("");
    });
  }

}
