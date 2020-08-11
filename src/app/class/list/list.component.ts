import { Component, OnInit } from '@angular/core';
import {ClassService} from '../../service/class.service';
import {ClassRoom} from '../../interface/ClassRoom';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  classList: ClassRoom[];
  value = '';

  constructor( private  classService: ClassService) { }

  ngOnInit() {
    this.classService.getAllClass().subscribe(result => {
  this.classList = result;
});
}
  deleteBook(i) {
    const classRoom = this.classList[i];
    this.classService.deleteClass(classRoom.id)
      .subscribe((result) => {
        this.classList = this.classList.filter(t => t.id !== classRoom.id);
      });
  }
}
