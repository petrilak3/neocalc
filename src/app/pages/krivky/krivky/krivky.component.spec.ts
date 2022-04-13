import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrivkyComponent } from './krivky.component';

describe('KrivkyComponent', () => {
  let component: KrivkyComponent;
  let fixture: ComponentFixture<KrivkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrivkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrivkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
