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
    component.ngOnInit();
    service.moneyInMachine.emit(environment.moneyMachine+100);
    expect(component.moneyMachine).toEqual(600);
  });

});
