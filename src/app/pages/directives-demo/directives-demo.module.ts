import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentChildComponent,
  },
  {
    path: 'child-parent',
    component: ChildParentComponent,
  },
];
@NgModule({
  declarations: [ParentChildComponent, ChildParentComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DirectivesDemoModule {}
