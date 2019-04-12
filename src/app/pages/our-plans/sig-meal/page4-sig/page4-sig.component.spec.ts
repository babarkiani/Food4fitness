import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4SigComponent } from './page4-sig.component';

describe('Page4SigComponent', () => {
  let component: Page4SigComponent;
  let fixture: ComponentFixture<Page4SigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page4SigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4SigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
