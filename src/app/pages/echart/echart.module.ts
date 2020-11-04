import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EchartComponent } from './echart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
  {
    path: '',
    component: EchartComponent,
    children: [
      {
        path: 'sample',
        loadChildren: () =>
          import('./sample/sample.module').then((m) => m.SampleModule),
      },
      {
        path: 'line-chart',
        loadChildren: () =>
          import('./line-chart/line-chart.module').then(
            (m) => m.LineChartModule
          ),
      },
      {
        path: 'pie-chart',
        loadChildren: () =>
          import('./pie-chart/pie-chart.module').then(
            (m) => m.PieChartModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [EchartComponent],
  exports: [EchartComponent],
})
export class EchartModule {}
