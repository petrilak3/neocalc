import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormogramsComponent } from './normograms.component';

describe('NormogramsComponent', () => {
  let component: NormogramsComponent;
  let fixture: ComponentFixture<NormogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormogramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
