import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseNames } from '../shared/course-names.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  coursename: CourseNames[];
  showInputForm: boolean = false;
  @Output() courseSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.coursename = [];
  }
  onCourseNameAdded(coursenames: CourseNames) {
    console.log(coursenames.name);
    let dataExist = this.coursename.findIndex(
      (x) => x.name.toLowerCase() === coursenames.name.toLowerCase()
    );

    if (dataExist !== -1) {
      alert('Course is already exist!');
    } else {
      this.coursename.push(coursenames);
      this.showInputForm = false;
    }
  }

  onCourseNameDeleted(coursenames: CourseNames) {
    this.showInputForm = false;
  }

  onCourseSelected(value) {
    this.courseSelected.emit(value);
  }
}
