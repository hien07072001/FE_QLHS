import { Component, OnInit } from '@angular/core';
import {ClassService} from '../../service/class.service';
import {ClassRoom} from '../../interface/ClassRoom';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  classList: ClassRoom[] = [];
  classForm: FormGroup;
  isSuccess: boolean;


  constructor(private classService: ClassService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log('ABC');
    this.classForm = this.fb.group({
      // id: new FormControl(''),
      code_Cl: new FormControl(''),
      hours: new FormControl(''),
      name_Cl: new FormControl(''),
      note: new FormControl(''),
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
    // console.log(this.objectiveForm.value);
    this.classService.addClass(classRoom).subscribe(() => {

      this.isSuccess = false;
    }, error => {
      this.isSuccess = true;
    });
  }
}
