import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageb2Component } from './pageb2.component';

describe('Pageb2Component', () => {
  let component: Pageb2Component;
  let fixture: ComponentFixture<Pageb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pageb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pageb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
