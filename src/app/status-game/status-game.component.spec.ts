import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGameComponent } from './status-game.component';

describe('StatusGameComponent', () => {
  let component: StatusGameComponent;
  let fixture: ComponentFixture<StatusGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ja', () => {
    expect(document)
  })
});
