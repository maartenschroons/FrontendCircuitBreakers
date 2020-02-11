import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeBeherenComponent } from './methode-beheren.component';

describe('MethodeBeherenComponent', () => {
  let component: MethodeBeherenComponent;
  let fixture: ComponentFixture<MethodeBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodeBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodeBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
