import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsingServicesComponent } from './card-using-services.component';

describe('CardUsingServicesComponent', () => {
  let component: CardUsingServicesComponent;
  let fixture: ComponentFixture<CardUsingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUsingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
