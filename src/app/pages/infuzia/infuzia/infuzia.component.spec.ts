import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfuziaComponent } from './infuzia.component';

describe('InfuziaComponent', () => {
  let component: InfuziaComponent;
  let fixture: ComponentFixture<InfuziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfuziaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfuziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
