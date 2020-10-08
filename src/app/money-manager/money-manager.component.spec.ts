import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { DataService } from '../services/data.service';
import { MoneyManagerComponent } from './money-manager.component';

describe('MoneyManagerComponent', () => {
  let component: MoneyManagerComponent;
  let fixture: ComponentFixture<MoneyManagerComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyManagerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyManagerComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen to subscribe', () => {
    service.moneyInMachine.emit(environment.moneyMachine);
    component.showMoneyInMachine();
    expect(component.moneyMachine).toEqual(500);
  });

}); 
