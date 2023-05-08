import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './pages/directives-demo/parent-child/parent-child.component';
import { SingletonDemoComponent } from './pages/singleton-demo/singleton-demo/singleton-demo.component';
import { SubjectDemoComponent } from './pages/subjects-demo/subject-demo/subject-demo.component';
import { ChildParentComponent } from './pages/directives-demo/child-parent/child-parent.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'directive-demo',
    loadChildren: () =>
      import('./pages/directives-demo/directives-demo.module').then(
        (m) => m.DirectivesDemoModule
      ),
  },

  {
    path: 'singleton',
    loadChildren: () =>
      import('./pages/singleton-demo/singleton-demo.module').then(
        (m) => m.SingletonDemoModule
      ),
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('./pages/subjects-demo/subjects-demo.module').then(
        (m) => m.SubjectsDemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
