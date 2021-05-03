import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CourseEditComponent } from './course-list/course-edit/course-edit.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-list/students-edit/students-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseEditComponent,
    StudentsListComponent,
    StudentsEditComponent,

  ],
  imports: [BrowserModule, FormsModule, NgMultiSelectDropDownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
