import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfsluitenComponent } from './afsluiten.component';

describe('AfsluitenComponent', () => {
  let component: AfsluitenComponent;
  let fixture: ComponentFixture<AfsluitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfsluitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfsluitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
