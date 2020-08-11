import { Component, OnInit } from '@angular/core';
import {Student} from '../../interface/Student';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';
import {ClassRoom} from '../../interface/ClassRoom';
import {ClassService} from '../../service/class.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentList: Student[];
  value = '';

  constructor( private  studentService: StudentService) { }
  ngOnInit() {
    this.studentService.getAllStudent().subscribe(result => {
      this.studentList = result;
    });
  }
  deleteStudent(i) {
    const student = this.studentList[i];
    this.studentService.deleteStudent(student.id)
      .subscribe((result) => {
        this.studentList = this.studentList.filter(t => t.id !== student.id);
      });
  }
}
