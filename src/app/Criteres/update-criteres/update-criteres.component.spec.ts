import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCriteresComponent } from './update-criteres.component';

describe('UpdateCriteresComponent', () => {
  let component: UpdateCriteresComponent;
  let fixture: ComponentFixture<UpdateCriteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCriteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
