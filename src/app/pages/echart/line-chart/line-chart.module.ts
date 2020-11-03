import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LineChartComponent } from './line-chart.component';

const routes: Routes = [
  {
    path: '',
    component: LineChartComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
})
export class LineChartModule {}
