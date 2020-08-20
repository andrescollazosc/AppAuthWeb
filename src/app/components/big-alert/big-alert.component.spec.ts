import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAlertComponent } from './big-alert.component';

describe('BigAlertComponent', () => {
  let component: BigAlertComponent;
  let fixture: ComponentFixture<BigAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
