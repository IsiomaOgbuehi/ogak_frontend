import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomePage } from './main-home.page';

describe('MainHomePage', () => {
  let component: MainHomePage;
  let fixture: ComponentFixture<MainHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
