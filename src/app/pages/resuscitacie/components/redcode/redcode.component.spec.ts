import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcodeComponent } from './redcode.component';

describe('RedcodeComponent', () => {
  let component: RedcodeComponent;
  let fixture: ComponentFixture<RedcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
