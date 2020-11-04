import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LineBarChartComponent } from './linebar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: LineBarChartComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LineBarChartComponent],
  exports: [LineBarChartComponent],
})
export class LineBarChartModule {}
