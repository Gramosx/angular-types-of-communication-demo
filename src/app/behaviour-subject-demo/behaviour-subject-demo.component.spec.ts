import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectDemoComponent } from './behaviour-subject-demo.component';

describe('BehaviourSubjectDemoComponent', () => {
  let component: BehaviourSubjectDemoComponent;
  let fixture: ComponentFixture<BehaviourSubjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourSubjectDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
