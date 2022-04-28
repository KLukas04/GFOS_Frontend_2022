import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilpicDialogComponent } from './update-profilpic-dialog.component';

describe('UpdateProfilpicDialogComponent', () => {
  let component: UpdateProfilpicDialogComponent;
  let fixture: ComponentFixture<UpdateProfilpicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilpicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilpicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
