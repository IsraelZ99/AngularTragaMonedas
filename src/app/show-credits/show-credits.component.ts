import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-credits',
  templateUrl: './show-credits.component.html',
  styleUrls: ['./show-credits.component.css']
})
export class ShowCreditsComponent implements OnInit {

  public showCredits: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCredits();
  }

  public getCredits() {
    this.dataService.boughtCredits.subscribe(money => {
      this.showCredits = money;
    });
  }

}
