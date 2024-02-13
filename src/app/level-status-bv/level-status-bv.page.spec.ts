import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelStatusBVPage } from './level-status-bv.page';

describe('LevelStatusBVPage', () => {
  let component: LevelStatusBVPage;
  let fixture: ComponentFixture<LevelStatusBVPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelStatusBVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
