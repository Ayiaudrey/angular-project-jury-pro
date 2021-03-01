import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCritereComponent } from './list-critere.component';

describe('ListCritereComponent', () => {
  let component: ListCritereComponent;
  let fixture: ComponentFixture<ListCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCritereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
