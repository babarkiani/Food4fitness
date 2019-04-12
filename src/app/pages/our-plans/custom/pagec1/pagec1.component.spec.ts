import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagec1Component } from './pagec1.component';

describe('Pagec1Component', () => {
  let component: Pagec1Component;
  let fixture: ComponentFixture<Pagec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
