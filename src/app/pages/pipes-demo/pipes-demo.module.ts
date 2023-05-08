import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    component: PipesDemoComponent,
  },
];

@NgModule({
  declarations: [PipesDemoComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PipesDemoModule {}
