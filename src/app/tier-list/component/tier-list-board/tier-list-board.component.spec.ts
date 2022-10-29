import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierListBoardComponent } from './tier-list-board.component';

describe('TierListBoardComponent', () => {
  let component: TierListBoardComponent;
  let fixture: ComponentFixture<TierListBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierListBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierListBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
