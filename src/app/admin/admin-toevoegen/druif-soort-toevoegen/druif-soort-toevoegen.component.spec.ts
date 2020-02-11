import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DruifSoortToevoegenComponent } from './druif-soort-toevoegen.component';

describe('DruifSoortToevoegenComponent', () => {
  let component: DruifSoortToevoegenComponent;
  let fixture: ComponentFixture<DruifSoortToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DruifSoortToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DruifSoortToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
