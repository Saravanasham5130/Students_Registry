import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { HomeComponent } from './home/home.component';

import { StudentsListComponent } from './students-list/students-list.component';
import { UpadteListComponent } from './upadte-list/upadte-list.component';
import { StudentsDetailComponent } from './View-Student/students-detail.component';


const routes: Routes = [
  { path: 'student', component: StudentsListComponent },
  { path: 'add', component: AddStudentsComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'update/:regNo', component: UpadteListComponent},
  {path: 'student-details/:regNo', component: StudentsDetailComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
