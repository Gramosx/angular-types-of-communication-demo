import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { CardUsingServicesComponent } from './components/card-using-services/card-using-services.component';
import { CardUsingObservablesComponent } from './components/card-using-observables/card-using-observables.component';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponentComponent,
    CardUsingServicesComponent,
    CardUsingObservablesComponent,
  ],
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatRippleModule],
  exports: [
    CardComponentComponent,
    CardUsingServicesComponent,
    CardUsingObservablesComponent,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
  ],
})
export class SharedModule {}
