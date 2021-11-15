import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricaoComponent } from './nutricao.component';

describe('NutricaoComponent', () => {
  let component: NutricaoComponent;
  let fixture: ComponentFixture<NutricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
