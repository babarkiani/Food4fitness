import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagec4Component } from './pagec4.component';

describe('Pagec4Component', () => {
  let component: Pagec4Component;
  let fixture: ComponentFixture<Pagec4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagec4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
