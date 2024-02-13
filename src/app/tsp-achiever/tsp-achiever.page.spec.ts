import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TspAchieverPage } from './tsp-achiever.page';

describe('TspAchieverPage', () => {
  let component: TspAchieverPage;
  let fixture: ComponentFixture<TspAchieverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TspAchieverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
