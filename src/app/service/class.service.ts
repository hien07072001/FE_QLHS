import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClassRoom} from '../interface/ClassRoom';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private readonly API_CLASS = 'http://localhost:8080/api/class';
  constructor(private httpClient: HttpClient) { }

  addClass(classRoom: ClassRoom): Observable<ClassRoom> {
    return this.httpClient.post<ClassRoom>(this.API_CLASS + '/create', classRoom);
  }

  getAllClass(): Observable<ClassRoom[]> {
    return this.httpClient.get<ClassRoom[]>(this.API_CLASS);
  }

  getClassById(id: number): Observable<ClassRoom> {
    return this.httpClient.get<ClassRoom>(`${this.API_CLASS}/getById/${id}`);
  }

  // updateClass(classRoom: ClassRoom): Observable<ClassRoom> {
  //   return this.httpClient.post<ClassRoom>(this.API_CLASS + '/create' , classRoom);
  // }

  deleteClass(id: number): Observable<ClassRoom> {
    return this.httpClient.delete<ClassRoom>(this.API_CLASS + `/${id}`);
  }

}
