import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-status-game',
  templateUrl: './status-game.component.html',
  styleUrls: ['./status-game.component.css']
})
export class StatusGameComponent implements OnInit {

  public msgStatusGame: string;
  public moneyWin: number;

  constructor(private dataService: DataService) {
    this.msgStatusGame = "Status";
    this.moneyWin = 0;
  }

  ngOnInit(): void {
    this.showMsgStatusGame();
    this.showMoneyWin();
    this.checkMsgStatus();
  }

  public showMsgStatusGame() {
    this.dataService.msgStatusGame$.subscribe(text => {
      this.msgStatusGame = text;
    });
  }

  public checkMsgStatus() :boolean{
    if(this.msgStatusGame === "Felicidades, has ganado")
      return true;
    else
      return false;
  }

  public showMoneyWin() {
    this.dataService.dinnerWin$.subscribe(money => {
      this.moneyWin = money;
    });
  }

}
