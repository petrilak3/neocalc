import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkchComponent } from './mkch.component';

describe('MkchComponent', () => {
  let component: MkchComponent;
  let fixture: ComponentFixture<MkchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
