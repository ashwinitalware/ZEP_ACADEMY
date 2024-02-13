import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotpassverifyPage } from './forgotpassverify.page';

describe('ForgotpassverifyPage', () => {
  let component: ForgotpassverifyPage;
  let fixture: ComponentFixture<ForgotpassverifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotpassverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
