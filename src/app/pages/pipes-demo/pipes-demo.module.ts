import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ParameterizedPipesComponent } from './parameterized-pipes/parameterized-pipes.component';
import { ChainingPipesComponent } from './chaining-pipes/chaining-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: PipesDemoComponent,
  },
  {
    path: '1',
    component: ParameterizedPipesComponent,
  },
  {
    path: '2',
    component: ChainingPipesComponent,
  },
  {
    path: '3',
    component: CustomPipesComponent,
  },
];

@NgModule({
  declarations: [
    PipesDemoComponent,
    ParameterizedPipesComponent,
    ChainingPipesComponent,
    CustomPipesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PipesDemoModule {}
