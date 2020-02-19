import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management/management.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', component: ManagementComponent },
];

@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportModule { }
