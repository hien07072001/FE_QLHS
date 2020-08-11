import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-class',
        component: ListComponent
      },
      {
        path: 'create-class',
        component: CreateComponent
      },
      {
        path: 'edit-class/:id',
        component: EditComponent
      },
    ]
  }
];

@NgModule({
  declarations: [ListComponent,
    CreateComponent,
    EditComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
