import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn3Component } from './assgn3.component';

describe('Assgn3Component', () => {
  let component: Assgn3Component;
  let fixture: ComponentFixture<Assgn3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assgn3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assgn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
