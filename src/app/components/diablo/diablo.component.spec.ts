import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabloComponent } from './diablo.component';

describe('DiabloComponent', () => {
  let component: DiabloComponent;
  let fixture: ComponentFixture<DiabloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
