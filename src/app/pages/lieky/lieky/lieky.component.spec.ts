import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiekyComponent } from './lieky.component';

describe('LiekyComponent', () => {
  let component: LiekyComponent;
  let fixture: ComponentFixture<LiekyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiekyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiekyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
