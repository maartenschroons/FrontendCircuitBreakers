import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaalToevoegenComponent } from './materiaal-toevoegen.component';

describe('MateriaalToevoegenComponent', () => {
  let component: MateriaalToevoegenComponent;
  let fixture: ComponentFixture<MateriaalToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaalToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaalToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
