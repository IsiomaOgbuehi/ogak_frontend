import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBoostPage } from './business-boost.page';

describe('BusinessBoostPage', () => {
  let component: BusinessBoostPage;
  let fixture: ComponentFixture<BusinessBoostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBoostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBoostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
