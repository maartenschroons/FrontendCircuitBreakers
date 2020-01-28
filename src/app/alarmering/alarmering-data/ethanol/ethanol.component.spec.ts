import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthanolComponent } from './ethanol.component';

describe('EthanolComponent', () => {
  let component: EthanolComponent;
  let fixture: ComponentFixture<EthanolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthanolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
