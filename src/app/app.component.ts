import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedCourse: string;

  onSelectionCourse(value) {
    this.selectedCourse = value;
  }
}
