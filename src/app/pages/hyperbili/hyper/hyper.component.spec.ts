import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperComponent } from './hyper.component';

describe('HyperComponent', () => {
  let component: HyperComponent;
  let fixture: ComponentFixture<HyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
