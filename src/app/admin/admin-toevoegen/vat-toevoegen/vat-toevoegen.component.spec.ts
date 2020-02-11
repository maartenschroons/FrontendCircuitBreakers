import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatToevoegenComponent } from './vat-toevoegen.component';

describe('VatToevoegenComponent', () => {
  let component: VatToevoegenComponent;
  let fixture: ComponentFixture<VatToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
