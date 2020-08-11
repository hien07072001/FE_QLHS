import { Component, OnInit } from '@angular/core';
import {ClassService} from '../../service/class.service';
import {ClassRoom} from '../../interface/ClassRoom';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    this.classForm = this.fb.group({

      code_Cl: new FormControl('',
        [Validators.required,
          Validators.minLength(2)]),
      name_Cl: new FormControl('',
        [Validators.required,
          Validators.minLength(2)]),
      hours: new FormControl('',
        [Validators.required,
          Validators.minLength(1)]),
      note: new FormControl('',
        [Validators.required,
          Validators.minLength(2)]),
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
      this.isSuccess = false;
    }, error => {
      this.isSuccess = true;
    });
  }
}
