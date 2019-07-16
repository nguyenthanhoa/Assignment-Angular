import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { DanhsachComponent } from '../Component/danhsach/danhsach.component';
import { NoiquyComponent } from '../Component/noiquy/noiquy.component';
import { MachcoComponent } from '../Component/machco/machco.component';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';
import { StudentDetailComponent } from '../Component/student-detail/student-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: DashboardComponent },
  { path: 'category', component: DanhsachComponent },
  { path: 'cate/:cateId/student', component: DanhsachComponent },
  { path: 'noiquy', component: NoiquyComponent },
  { path: 'machco', component: MachcoComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: '**', component: DashboardComponent },
]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
