import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  private url ="http://localhost:8108/user/";
  

  constructor(private http:HttpClient) { }

  getHome():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}` );
  }

  
  // Get Users - Read
  getStudentsList(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}getAll`);
  }
  // Add User - Create
 addStudents(student: Student): Observable<Object>{
  return this.http.post<Student>(`${this.url}add`,student)
}

// Get User by Id - Read
getStudentByRegNo(regNo: number): Observable<Student>{
  return this.http.get<Student>(`${this.url}get/${regNo}`);
}

// Update User - Update
updateSudent(regNo: number ,student?: any): Observable<any>{
  return this.http.put<any>(`${this.url}update/${regNo}`, student);
}

// Delete User - Delete
deleteStudent(regNo: number): Observable<any>{
  return this.http.delete<any>(`${this.url}delete/${regNo}`);
}



  }
