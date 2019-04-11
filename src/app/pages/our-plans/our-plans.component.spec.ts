import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPlansComponent } from './our-plans.component';

describe('OurPlansComponent', () => {
  let component: OurPlansComponent;
  let fixture: ComponentFixture<OurPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
