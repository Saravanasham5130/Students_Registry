import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit{

  students: Student[] = [];
  constructor(private studentservice: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents(){
    this.studentservice.getStudentsList().subscribe(data => {
      this.students = data;
    });
  }
  studentDetails(regNo:number){
    this.router.navigate(['student-details' ,regNo]);
  }
  updateStudent(regNo:number){
    this.router.navigate(['update' ,regNo]);
  }
  deleteStudent(regNo:number){
    this.studentservice.deleteStudent(regNo).subscribe(data=>{
      console.log(data);
      this.getStudents();
    })
  }
}
