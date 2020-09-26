import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemporaryComponent } from './contemporary.component';

describe('ContemporaryComponent', () => {
  let component: ContemporaryComponent;
  let fixture: ComponentFixture<ContemporaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContemporaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
