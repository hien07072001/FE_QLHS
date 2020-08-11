import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassRoom} from '../../interface/ClassRoom';
import {ClassService} from '../../service/class.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  classRoom: ClassRoom;
  successMessage: string;
  failMessage: string;
  classForm: FormGroup;
  isSuccess: boolean;

  constructor(private classService: ClassService,
              private route: ActivatedRoute,
              private routes: Router) { }

  ngOnInit(): void {
    console.log('asd');
    this.classForm = new FormGroup({
      id: new FormControl(''),
      code_Cl: new FormControl(''),
      hours: new FormControl(''),
      name_Cl: new FormControl(''),
      note: new FormControl(''),
      });

    const id = +this.route.snapshot.paramMap.get('id');
    this.classService.getClassById(id)
      .subscribe(result => {
        this.classRoom = result;
        this.classForm.patchValue(this.classRoom);
        this.successMessage = 'Edit class successfully !';
      }, error => {
        this.failMessage = 'Edit class fail';
      });
  }

  onSubmit() {
    const classRoom: ClassRoom = {
      id: this.classForm.value.id,
      name_Cl: this.classForm.value.name_Cl,
      code_Cl: this.classForm.value.code_Cl,
      hours: this.classForm.value.hours,
      note: this.classForm.value.note,
    };
    this.classService.addClass(classRoom).subscribe(() => {
      this.routes.navigate(['list-class']);
      this.isSuccess = false;
    }, error => {
      this.isSuccess = true;
    });
  }
}
