import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomiaComponent } from './astronomia.component';

describe('AstronomiaComponent', () => {
  let component: AstronomiaComponent;
  let fixture: ComponentFixture<AstronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
