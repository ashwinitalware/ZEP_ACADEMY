import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoyaltyGraphPage } from './royalty-graph.page';

describe('RoyaltyGraphPage', () => {
  let component: RoyaltyGraphPage;
  let fixture: ComponentFixture<RoyaltyGraphPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoyaltyGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
