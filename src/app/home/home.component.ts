import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  regNo:any;
  student:Student = new Student();
 
  constructor(private studentService : StudentService ,
    private route: ActivatedRoute ){}
  ngOnInit(): void {
    
    this.studentService.getHome().subscribe(data => {
      return data;
    });
  }
}
