import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlfgComponent } from './editlfg.component';

describe('EditlfgComponent', () => {
  let component: EditlfgComponent;
  let fixture: ComponentFixture<EditlfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
