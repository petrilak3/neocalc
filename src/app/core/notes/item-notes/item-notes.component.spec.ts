import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNotesComponent } from './item-notes.component';

describe('ItemNotesComponent', () => {
  let component: ItemNotesComponent;
  let fixture: ComponentFixture<ItemNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
