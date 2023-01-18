import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import{HttpClientModule} from '@angular/common/http';
import { AddStudentsComponent } from './add-students/add-students.component'
import { FormsModule } from '@angular/forms';
import { StudentsDetailComponent } from './View-Student/students-detail.component';
import { UpadteListComponent } from './upadte-list/upadte-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentsComponent,
    StudentsDetailComponent,
    UpadteListComponent,
    HomeComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
