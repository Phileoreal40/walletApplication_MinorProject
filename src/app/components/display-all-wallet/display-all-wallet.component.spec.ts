import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllWalletComponent } from './display-all-wallet.component';

describe('DisplayAllWalletComponent', () => {
  let component: DisplayAllWalletComponent;
  let fixture: ComponentFixture<DisplayAllWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
