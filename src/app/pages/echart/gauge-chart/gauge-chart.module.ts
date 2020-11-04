import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GaugeChartComponent } from './gauge-chart.component';
const routes: Routes = [
  {
    path: '',
    component: GaugeChartComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [GaugeChartComponent],
  exports: [GaugeChartComponent],
})
export class GaugeChartModule {}
