import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { BehaviourSubjectDemoComponent } from './behaviour-subject-demo/behaviour-subject-demo.component';
import { ReplaySubjectDemoComponent } from './replay-subject-demo/replay-subject-demo.component';
import { SingletonDemoComponent } from './singleton-demo/singleton-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponentComponent } from './component/card-component/card-component.component';
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildParentComponent,
    SubjectDemoComponent,
    BehaviourSubjectDemoComponent,
    ReplaySubjectDemoComponent,
    SingletonDemoComponent,
    CardComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
