import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigMealComponent } from './sig-meal.component';

describe('SigMealComponent', () => {
  let component: SigMealComponent;
  let fixture: ComponentFixture<SigMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
