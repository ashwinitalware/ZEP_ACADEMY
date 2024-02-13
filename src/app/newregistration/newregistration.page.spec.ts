import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewregistrationPage } from './newregistration.page';

describe('NewregistrationPage', () => {
  let component: NewregistrationPage;
  let fixture: ComponentFixture<NewregistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
