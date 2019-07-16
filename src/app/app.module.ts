import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { MainComponent } from './Component/main/main.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DanhsachComponent } from './Component/danhsach/danhsach.component';
import { NoiquyComponent } from './Component/noiquy/noiquy.component';
import { MachcoComponent } from './Component/machco/machco.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { StudentDetailComponent } from './Component/student-detail/student-detail.component';
import { AddStudentComponent } from './Component/add-student/add-student.component';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DanhsachComponent,
    NoiquyComponent,
    MachcoComponent,
    DashboardComponent,
    StudentDetailComponent,
    AddStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
