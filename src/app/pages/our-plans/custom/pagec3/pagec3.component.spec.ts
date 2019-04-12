import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagec3Component } from './pagec3.component';

describe('Pagec3Component', () => {
  let component: Pagec3Component;
  let fixture: ComponentFixture<Pagec3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagec3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
