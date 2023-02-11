import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteeringRoutingModule } from './volunteering-routing.module';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VolunteeringComponent],
  imports: [CommonModule, VolunteeringRoutingModule, SharedModule],
})
export class VolunteeringModule {}
