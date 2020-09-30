import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreditsComponent } from './show-credits.component';

describe('ShowCreditsComponent', () => {
  let component: ShowCreditsComponent;
  let fixture: ComponentFixture<ShowCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
