import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FelinosPage } from './felinos.page';

describe('FelinosPage', () => {
  let component: FelinosPage;
  let fixture: ComponentFixture<FelinosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FelinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
