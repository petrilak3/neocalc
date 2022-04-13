import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuscitacieComponent } from './resuscitacie.component';

describe('ResuscitacieComponent', () => {
  let component: ResuscitacieComponent;
  let fixture: ComponentFixture<ResuscitacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuscitacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuscitacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
