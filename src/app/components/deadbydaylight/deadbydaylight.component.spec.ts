import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadbydaylightComponent } from './deadbydaylight.component';

describe('DeadbydaylightComponent', () => {
  let component: DeadbydaylightComponent;
  let fixture: ComponentFixture<DeadbydaylightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadbydaylightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadbydaylightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
