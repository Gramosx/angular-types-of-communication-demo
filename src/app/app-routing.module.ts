import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SingletonDemoComponent } from './singleton-demo/singleton-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { ChildParentComponent } from './child-parent/child-parent.component';

const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentChildComponent,
  },
  {
    path: 'child-parent',
    component: ChildParentComponent,
  },
  {
    path: 'singleton',
    component: SingletonDemoComponent,
  },
  {
    path: 'subject',
    component: SubjectDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
