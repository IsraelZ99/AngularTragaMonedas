import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  msgStatusGame$ = new EventEmitter<string>();
  dinnerWin$ = new EventEmitter<number>();
  dinerInMachine$ = new EventEmitter<number>();

  constructor() { }
}
