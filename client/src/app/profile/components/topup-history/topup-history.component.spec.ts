import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupHistoryComponent } from './topup-history.component';

describe('TopupHistoryComponent', () => {
  let component: TopupHistoryComponent;
  let fixture: ComponentFixture<TopupHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
