import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SingletonDemoComponent } from './pages/singleton-demo/singleton-demo/singleton-demo.component';
import { SubjectDemoComponent } from './pages/subjects-demo/subject-demo/subject-demo.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
