import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsingObservablesComponent } from './card-using-observables.component';

describe('CardUsingObservablesComponent', () => {
  let component: CardUsingObservablesComponent;
  let fixture: ComponentFixture<CardUsingObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsingObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUsingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
