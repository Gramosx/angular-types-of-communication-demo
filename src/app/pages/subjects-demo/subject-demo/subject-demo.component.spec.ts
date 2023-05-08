import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemoComponent } from './subject-demo.component';

describe('SubjectDemoComponent', () => {
  let component: SubjectDemoComponent;
  let fixture: ComponentFixture<SubjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
