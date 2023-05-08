import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SubjectDemo',
    component: SubjectDemoComponent,
  },
];
@NgModule({
  declarations: [SubjectDemoComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SubjectsDemoModule {}
