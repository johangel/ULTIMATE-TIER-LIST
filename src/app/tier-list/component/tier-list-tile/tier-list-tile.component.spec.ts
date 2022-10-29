import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierListTileComponent } from './tier-list-tile.component';

describe('TierListTileComponent', () => {
  let component: TierListTileComponent;
  let fixture: ComponentFixture<TierListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
