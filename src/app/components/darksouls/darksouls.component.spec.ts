import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Darksouls3Component } from './darksouls3.component';

describe('Darksouls3Component', () => {
  let component: Darksouls3Component;
  let fixture: ComponentFixture<Darksouls3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Darksouls3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Darksouls3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
