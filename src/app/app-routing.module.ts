import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { CustomPreLoadingStrategyService } from './custom-pre-loading-strategy.service';
import { NetworkawarepreLoadingstrategyService } from './networkawarepre-loadingstrategy.service';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseResolverService } from './course-resolver.service';


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
  { path: 'courses', component: CourselistComponent, resolve: { courses: CourseResolverService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NetworkawarepreLoadingstrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
