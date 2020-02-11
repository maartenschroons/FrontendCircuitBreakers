import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatBeherenComponent } from './vat-beheren.component';

describe('VatBeherenComponent', () => {
  let component: VatBeherenComponent;
  let fixture: ComponentFixture<VatBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
