import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverzichtComponent } from './admin-overzicht.component';

describe('AdminOverzichtComponent', () => {
  let component: AdminOverzichtComponent;
  let fixture: ComponentFixture<AdminOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
