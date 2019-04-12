import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageb1Component } from './pageb1.component';

describe('Pageb1Component', () => {
  let component: Pageb1Component;
  let fixture: ComponentFixture<Pageb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pageb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pageb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
