import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddsubscriptionPage } from './addsubscription.page';

describe('AddsubscriptionPage', () => {
  let component: AddsubscriptionPage;
  let fixture: ComponentFixture<AddsubscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddsubscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
