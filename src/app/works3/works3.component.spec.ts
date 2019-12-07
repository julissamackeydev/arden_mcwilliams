import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Works3Component } from './works3.component';

describe('Works3Component', () => {
  let component: Works3Component;
  let fixture: ComponentFixture<Works3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Works3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Works3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
