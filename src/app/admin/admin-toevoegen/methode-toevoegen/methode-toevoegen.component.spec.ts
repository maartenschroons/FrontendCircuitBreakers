import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeToevoegenComponent } from './methode-toevoegen.component';

describe('MethodeToevoegenComponent', () => {
  let component: MethodeToevoegenComponent;
  let fixture: ComponentFixture<MethodeToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodeToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodeToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
