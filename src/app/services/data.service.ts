import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  msgStatusGame = new EventEmitter<string>();
  moneyWin = new EventEmitter<number>();
  moneyInMachine = new EventEmitter<number>();
  
  constructor() { }
}
