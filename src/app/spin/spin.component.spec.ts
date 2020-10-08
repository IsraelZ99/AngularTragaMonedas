import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinComponent } from './spin.component';

describe('SpinComponent', () => {
  let component: SpinComponent;
  let fixture: ComponentFixture<SpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have credits to enter the coin', () => {
    const credits = 2; component.getCreditsToEnter = credits;
    component.playVideogame();
    expect(component.buttonStatus).toEqual(true);
  });


});
