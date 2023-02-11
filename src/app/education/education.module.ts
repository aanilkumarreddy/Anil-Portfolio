import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education/education.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, EducationRoutingModule, SharedModule],
})
export class EducationModule {}
