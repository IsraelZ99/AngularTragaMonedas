import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleTestingComponent } from './example-testing.component';

describe('ExampleTestingComponent (minimal)', () => {

  it('should create', () => {
    TestBed.configureTestingModule({declarations: [ExampleTestingComponent]});
    const fixture = TestBed.createComponent(ExampleTestingComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  })

});


describe('ExampleTestingComponent (with beforeEach)',() => {
  let component: ExampleTestingComponent;
  let fixture: ComponentFixture<ExampleTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ExampleTestingComponent]});
    fixture = TestBed.createComponent(ExampleTestingComponent);
    component = fixture.componentInstance;
  });

  

});
