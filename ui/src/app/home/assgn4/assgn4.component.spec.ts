import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn4Component } from './assgn4.component';

describe('Assgn4Component', () => {
  let component: Assgn4Component;
  let fixture: ComponentFixture<Assgn4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assgn4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assgn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
