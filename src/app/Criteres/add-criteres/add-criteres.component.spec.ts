import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCriteresComponent } from './add-criteres.component';

describe('AddCriteresComponent', () => {
  let component: AddCriteresComponent;
  let fixture: ComponentFixture<AddCriteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCriteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
