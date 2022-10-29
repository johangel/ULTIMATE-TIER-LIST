import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierListImageComponent } from './tier-list-image.component';

describe('TierListImageComponent', () => {
  let component: TierListImageComponent;
  let fixture: ComponentFixture<TierListImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierListImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
