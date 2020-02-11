import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToevoegenComponent } from './admin-toevoegen.component';

describe('AdminToevoegenComponent', () => {
  let component: AdminToevoegenComponent;
  let fixture: ComponentFixture<AdminToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
