import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CvItemComponent } from './cv-item/cv-item.component';

const materialModules = [
  MatBadgeModule,
  MatChipsModule,
  MatMenuModule,
  MatProgressBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [CvItemComponent],
  imports: [CommonModule, materialModules],
  exports: [CvItemComponent, materialModules],
})
export class SharedModule {}
