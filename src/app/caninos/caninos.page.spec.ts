import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaninosPage } from './caninos.page';

describe('CaninosPage', () => {
  let component: CaninosPage;
  let fixture: ComponentFixture<CaninosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaninosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
