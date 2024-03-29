import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteeringComponent } from './volunteering/volunteering.component';

const routes: Routes = [
  {
    path: '',
    component: VolunteeringComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteeringRoutingModule {}
