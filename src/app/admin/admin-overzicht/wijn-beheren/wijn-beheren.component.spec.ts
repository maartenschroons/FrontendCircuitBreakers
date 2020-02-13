import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijnBeherenComponent } from './wijn-beheren.component';

describe('WijnBeherenComponent', () => {
  let component: WijnBeherenComponent;
  let fixture: ComponentFixture<WijnBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijnBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijnBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
