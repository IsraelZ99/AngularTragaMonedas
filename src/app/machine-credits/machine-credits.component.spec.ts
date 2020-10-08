import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCreditsComponent } from './machine-credits.component';

describe('MachineCreditsComponent', () => {
  let component: MachineCreditsComponent;
  let fixture: ComponentFixture<MachineCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a whole number', () => {
    //(<HTMLInputElement>document.getElementById('number')).value = '10';
    //fixture.nativeElement.querySelector('button').click();
    const number = 10; component.numberCredits = number;

    expect(component.buyCredits()).toEqual(1);
  });

  it ('should don not get a  decimal number', () => {
    const number = 0.5; component.numberCredits = number;

    expect(component.buyCredits()).toEqual(0);
  });

});
