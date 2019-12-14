import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoinsComponent } from './view-coins.component';

describe('ViewCoinsComponent', () => {
  let component: ViewCoinsComponent;
  let fixture: ComponentFixture<ViewCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
