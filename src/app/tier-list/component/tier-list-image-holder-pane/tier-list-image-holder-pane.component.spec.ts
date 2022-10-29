import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierListImageHolderPaneComponent } from './tier-list-image-holder-pane.component';

describe('TierListImageHolderPaneComponent', () => {
  let component: TierListImageHolderPaneComponent;
  let fixture: ComponentFixture<TierListImageHolderPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierListImageHolderPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierListImageHolderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
