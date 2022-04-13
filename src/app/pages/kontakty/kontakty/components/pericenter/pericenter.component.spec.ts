import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericenterComponent } from './pericenter.component';

describe('PericenterComponent', () => {
  let component: PericenterComponent;
  let fixture: ComponentFixture<PericenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PericenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PericenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
