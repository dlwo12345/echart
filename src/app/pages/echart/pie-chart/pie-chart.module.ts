import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PieChartComponent } from './pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [PieChartComponent],
  exports: [PieChartComponent],
})
export class PieChartModule {}
