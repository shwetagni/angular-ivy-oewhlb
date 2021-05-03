import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

import { CourseNames } from 'src/app/shared/course-names.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
  value = '';

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('checkBox') checkBox: ElementRef;
  @Output() coursenameAdded = new EventEmitter<CourseNames>();
  @Output() coursenameDeleted = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onAddCourse(checked) {
    if (this.nameInputRef.nativeElement.value) {
      if (checked) {
        const courseName = this.nameInputRef.nativeElement.value;
        const newCourseNames = new CourseNames(courseName);
        this.coursenameAdded.emit(newCourseNames);
        this.checkBox.nativeElement.checked = false;
        this.nameInputRef.nativeElement.value = '';
      }
    } else {
      this.checkBox.nativeElement.checked = false;
      alert('Please enter course name!');
    }
  }

  onDeleteCourse() {
    this.checkBox.nativeElement.checked = false;
    this.nameInputRef.nativeElement.value = '';
    this.coursenameDeleted.emit(true);
  }
}
