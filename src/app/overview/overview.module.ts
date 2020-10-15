import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, SharedModule, OverviewRoutingModule],
})
export class OverviewModule {}
