import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagec2Component } from './pagec2.component';

describe('Pagec2Component', () => {
  let component: Pagec2Component;
  let fixture: ComponentFixture<Pagec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
