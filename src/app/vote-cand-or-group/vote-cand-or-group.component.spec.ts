import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCandOrGroupComponent } from './vote-cand-or-group.component';

describe('VoteCandOrGroupComponent', () => {
  let component: VoteCandOrGroupComponent;
  let fixture: ComponentFixture<VoteCandOrGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteCandOrGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCandOrGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
