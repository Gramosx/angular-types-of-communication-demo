import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SingletonDemoComponent } from './singleton-demo/singleton-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { BehaviourSubjectDemoComponent } from './behaviour-subject-demo/behaviour-subject-demo.component';
import { ReplaySubjectDemoComponent } from './replay-subject-demo/replay-subject-demo.component';

const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentChildComponent,
  },
  {
    path: 'child-parent',
    component: ParentChildComponent,
  },
  {
    path: 'singleton',
    component: SingletonDemoComponent,
  },
  {
    path: 'subject',
    component: SubjectDemoComponent,
  },
  {
    path: 'behaviour',
    component: BehaviourSubjectDemoComponent,
  },
  {
    path: 'replay',
    component: ReplaySubjectDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
