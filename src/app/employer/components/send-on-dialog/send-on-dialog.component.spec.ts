import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOnDialogComponent } from './send-on-dialog.component';

describe('SendOnDialogComponent', () => {
  let component: SendOnDialogComponent;
  let fixture: ComponentFixture<SendOnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
