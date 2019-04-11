import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2SigComponent } from './page2-sig.component';

describe('Page2SigComponent', () => {
  let component: Page2SigComponent;
  let fixture: ComponentFixture<Page2SigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2SigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2SigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
