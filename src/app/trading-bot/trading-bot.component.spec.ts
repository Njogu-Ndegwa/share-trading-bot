import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingBotComponent } from './trading-bot.component';

describe('TradingBotComponent', () => {
  let component: TradingBotComponent;
  let fixture: ComponentFixture<TradingBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingBotComponent]
    });
    fixture = TestBed.createComponent(TradingBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
