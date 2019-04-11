import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3SigComponent } from './page3-sig.component';

describe('Page3SigComponent', () => {
  let component: Page3SigComponent;
  let fixture: ComponentFixture<Page3SigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3SigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3SigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
