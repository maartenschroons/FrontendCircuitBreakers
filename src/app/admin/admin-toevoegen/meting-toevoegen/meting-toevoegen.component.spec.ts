import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetingToevoegenComponent } from './meting-toevoegen.component';

describe('MetingToevoegenComponent', () => {
  let component: MetingToevoegenComponent;
  let fixture: ComponentFixture<MetingToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetingToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetingToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
