import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPagesComponent } from './header-pages.component';

describe('HeaderPagesComponent', () => {
  let component: HeaderPagesComponent;
  let fixture: ComponentFixture<HeaderPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
