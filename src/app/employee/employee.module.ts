import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '**', component: ManagerComponent },
];

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
