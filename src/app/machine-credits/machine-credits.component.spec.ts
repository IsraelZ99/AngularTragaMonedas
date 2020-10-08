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

  /*it('should have a whole number', () => {
    fixture.nativeElement.querySelector('input').value = '10';
    fixture.nativeElement.querySelector('button').click();

    expect(component.buyCredits()).toEqual('0');
  });*/

});
