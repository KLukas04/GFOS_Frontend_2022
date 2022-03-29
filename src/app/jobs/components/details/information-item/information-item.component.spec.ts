import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationItemComponent } from './information-item.component';

describe('InformationItemComponent', () => {
  let component: InformationItemComponent;
  let fixture: ComponentFixture<InformationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
