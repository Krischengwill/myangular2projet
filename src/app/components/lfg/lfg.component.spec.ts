import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LFGComponent } from './lfg.component';

describe('LFGComponent', () => {
  let component: LFGComponent;
  let fixture: ComponentFixture<LFGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LFGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
