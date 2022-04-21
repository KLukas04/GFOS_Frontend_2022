import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiyDialogComponent } from './verfiy-dialog.component';

describe('VerfiyDialogComponent', () => {
  let component: VerfiyDialogComponent;
  let fixture: ComponentFixture<VerfiyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfiyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfiyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
