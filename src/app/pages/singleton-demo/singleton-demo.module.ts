import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SingletonDemoComponent } from './singleton-demo/singleton-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SingletonDemoComponent,
  },
];

@NgModule({
  declarations: [SingletonDemoComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SingletonDemoModule {}
