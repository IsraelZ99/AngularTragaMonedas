import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-money-manager',
  templateUrl: './money-manager.component.html',
  styleUrls: ['./money-manager.component.css']
})
export class MoneyManagerComponent implements OnInit {

  public moneyMachine: number;

  constructor(private dataService: DataService) {
    this.moneyMachine = environment.moneyMachine;
  }

  ngOnInit(): void {
    this.showMoneyInMachine();
  }

  public showMoneyInMachine() {
    this.dataService.dinerInMachine$.subscribe(money => {
      this.moneyMachine = money;
    });
  }

}
