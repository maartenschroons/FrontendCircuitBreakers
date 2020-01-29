import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonDetailsVinificatiesComponent } from './toon-details-vinificaties.component';

describe('ToonDetailsVinificatiesComponent', () => {
  let component: ToonDetailsVinificatiesComponent;
  let fixture: ComponentFixture<ToonDetailsVinificatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonDetailsVinificatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonDetailsVinificatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
