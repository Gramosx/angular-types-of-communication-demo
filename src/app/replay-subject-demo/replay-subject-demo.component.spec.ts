import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectDemoComponent } from './replay-subject-demo.component';

describe('ReplaySubjectDemoComponent', () => {
  let component: ReplaySubjectDemoComponent;
  let fixture: ComponentFixture<ReplaySubjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaySubjectDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
