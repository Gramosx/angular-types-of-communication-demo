import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { SingletonDemoComponent } from './singleton-demo/singleton-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponentComponent } from './component/card-component/card-component.component';
import { MatRippleModule } from '@angular/material/core';
import { CardUsingServicesComponent } from './component/card-using-services/card-using-services.component';
import { CardUsingObservablesComponent } from './component/card-using-observables/card-using-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildParentComponent,
    SubjectDemoComponent,
    SingletonDemoComponent,
    CardComponentComponent,
    CardUsingServicesComponent,
    CardUsingObservablesComponent,
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
