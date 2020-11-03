import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [SampleComponent],
  exports: [SampleComponent],
})
export class SampleModule {}
