import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-student',
        component: ListStudentComponent
      },
      {
        path: 'create-student',
        component: CreateStudentComponent
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent
      },
    ]
  }
];

@NgModule({
  declarations: [ ListStudentComponent, CreateStudentComponent, EditStudentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StudentModule { }
