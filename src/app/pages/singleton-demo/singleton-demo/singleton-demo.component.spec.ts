import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonDemoComponent } from './singleton-demo.component';

describe('SingletonDemoComponent', () => {
  let component: SingletonDemoComponent;
  let fixture: ComponentFixture<SingletonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletonDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
