import { Component, Input, OnInit } from '@angular/core';
import { StudentsNames } from '../shared/studentsname.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  studentData = [];
  showInputForm: boolean = false;
  studentForm: boolean = false;
  course;
  tempStudentData = [];
  @Input() selectedCourse;

  constructor() {}

  ngOnInit(): void {
    this.studentData = [];
  }

  ngOnChanges() {
    if (this.selectedCourse !== '--Select--' && this.selectedCourse) {
      this.showInputForm = true;
      this.course = this.selectedCourse;

      this.studentData = this.tempStudentData.filter(
        (x) => x.courseName === this.selectedCourse
      );
    } else {
      this.showInputForm = false;
    }
  }

  onStudentNameAdded(studentname) {
    let dataExist = this.studentData.findIndex(
      (x) =>
        x.studentName.toLowerCase() === studentname.studentName.toLowerCase() &&
        x.courseName.toLowerCase() === this.selectedCourse.toLowerCase()
    );
    if (dataExist !== -1) {
      alert('Student is already exist!');
    } else {
      this.tempStudentData.push({
        studentName: studentname.studentName,
        courseName: this.selectedCourse,
      });
    }

    this.studentData = this.tempStudentData.filter(
      (x) => x.courseName === this.selectedCourse
    );
    this.studentForm = false;
  }

  onStudentNameDeleted(studentname: StudentsNames) {
    this.studentForm = false;
  }
}
