import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelStatusPage } from './level-status.page';

describe('LevelStatusPage', () => {
  let component: LevelStatusPage;
  let fixture: ComponentFixture<LevelStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
