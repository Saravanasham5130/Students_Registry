import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit  {
  regNo:any;
  student:Student = new Student();
 
  constructor(private studentService : StudentService ,
    private route: ActivatedRoute ){}
  ngOnInit(): void {
    this.regNo = this.route.snapshot.params['regNo'];
    this.studentService.getStudentByRegNo(this.regNo).subscribe(data => {
      this.student = data;
    });
  }
  
   

 
  }
  


