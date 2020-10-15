import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, SharedModule, ExperienceRoutingModule],
})
export class ExperienceModule {}
