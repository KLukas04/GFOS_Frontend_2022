import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsHeaderComponent } from './greetings-header.component';

describe('GreetingsHeaderComponent', () => {
  let component: GreetingsHeaderComponent;
  let fixture: ComponentFixture<GreetingsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
