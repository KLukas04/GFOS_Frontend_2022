import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofaDialogComponent } from './twofa-dialog.component';

describe('TwofaDialogComponent', () => {
  let component: TwofaDialogComponent;
  let fixture: ComponentFixture<TwofaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwofaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwofaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
