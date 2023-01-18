import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

import { Student } from '../student';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit{


  student :Student = new Student();
  constructor(private service:StudentService, private router: Router) { }
  
  
  
  ngOnInit(): void {
    
    
  }
  saveStudent(){
    this.service.addStudents(this.student).subscribe(data => {
      console.log(data);
      this.goToStudentsList();
    
    },
    error => console.log(error));
    
  }
  goToStudentsList(){
    this.router.navigate(['/add']);
    }
  onSubmit(){
    console.log(this.saveStudent);
    this.saveStudent();
  }

}


