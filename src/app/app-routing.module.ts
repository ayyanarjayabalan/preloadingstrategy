import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { CustomPreLoadingStrategyService } from './custom-pre-loading-strategy.service';


const routes: Routes = [
  {
    path: 'employee',
    data: { preload: true, loadAfter: 10000 },
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'admin',
    data: { preload: true, loadAfter: 5000 },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreLoadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
