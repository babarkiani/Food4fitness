import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1SigComponent } from './page1-sig.component';

describe('Page1SigComponent', () => {
  let component: Page1SigComponent;
  let fixture: ComponentFixture<Page1SigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1SigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1SigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
