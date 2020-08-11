import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../interface/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly API_STUDENT = 'http://localhost:8080/api/student';
  constructor(private httpClient: HttpClient) { }

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API_STUDENT + '/create', student);
  }

  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_STUDENT);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.API_STUDENT}/getById/${id}`);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.API_STUDENT + `/${id}`);
  }

}
