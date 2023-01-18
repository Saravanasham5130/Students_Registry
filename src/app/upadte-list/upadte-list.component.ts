import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-upadte-list',
  templateUrl: './upadte-list.component.html',
  styleUrls: ['./upadte-list.component.css']
})
export class UpadteListComponent  implements OnInit{
 
  regNo:any;
  student:Student = new Student();
  constructor(private studentService : StudentService ,private route: ActivatedRoute ,private router: Router){}

  
  ngOnInit(): void {
    this.regNo = this.route.snapshot.params['regNo'];
    this.studentService.getStudentByRegNo(this.regNo).subscribe(data =>{
    
      this.student =data;
    });
   

  }
  onSubmit() {
    this.studentService.updateSudent(this.regNo, this.student).subscribe( data =>{
      this.goToStudentsList();
    });
  }
  goToStudentsList(){
    this.router.navigate(['/update']);
  }
   
  }
