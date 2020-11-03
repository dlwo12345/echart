import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EchartComponent } from './echart.component';

const routes: Routes = [{ path: '', component: EchartComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [EchartComponent],
  exports: [EchartComponent],
})
export class EchartModule {}
