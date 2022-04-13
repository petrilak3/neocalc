import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdporucaniaComponent } from './odporucania.component';

describe('OdporucaniaComponent', () => {
  let component: OdporucaniaComponent;
  let fixture: ComponentFixture<OdporucaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdporucaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdporucaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
