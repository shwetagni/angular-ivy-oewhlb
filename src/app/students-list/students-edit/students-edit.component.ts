import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
} from '@angular/core';
import { StudentsNames } from 'src/app/shared/studentsname.model';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css'],
})
export class StudentsEditComponent implements OnInit {
  value = '';

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('checkBox') checkBox: ElementRef;
  @Output() studentnameAdded = new EventEmitter<StudentsNames>();
  @Output() studentnameDeleted = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onAddStudent(checked) {
    if (this.nameInputRef.nativeElement.value) {
      if (checked) {
        const studentName = this.nameInputRef.nativeElement.value;
        const newStudentName = new StudentsNames('', studentName);
        this.studentnameAdded.emit(newStudentName);
        this.checkBox.nativeElement.checked = false;
        this.nameInputRef.nativeElement.value = '';
      }
    } else {
      this.checkBox.nativeElement.checked = false;
      alert('Please enter student name!');
    }
  }

  onDeleteStudent() {
    this.checkBox.nativeElement.checked = false;
    this.nameInputRef.nativeElement.value = '';
    this.studentnameDeleted.emit(true);
  }
}
