import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn2Component } from './assgn2.component';

describe('Assgn2Component', () => {
  let component: Assgn2Component;
  let fixture: ComponentFixture<Assgn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assgn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assgn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
