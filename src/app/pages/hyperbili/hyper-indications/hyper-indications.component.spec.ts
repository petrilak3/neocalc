import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperIndicationsComponent } from './hyper-indications.component';

describe('HyperIndicationsComponent', () => {
  let component: HyperIndicationsComponent;
  let fixture: ComponentFixture<HyperIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
