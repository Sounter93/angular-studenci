import { Component } from '@angular/core';
import { Student } from './student';
import { AddStudent } from './add-student/add-student';
import { EditStudent } from './edit-student/edit-student';

@Component({
  selector: 'students',
  imports: [AddStudent, EditStudent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tytul_listy = 'Lista wszystkich studentów';

  studenci: Student[] = [
    new Student('Karol', 'Golek', 21, [5.0, 4.5, 4.0]),
    new Student('Kamil', 'Golek', 22, [3.0, 2.0, 3.5]),
    new Student('Piotr', 'Piotrowski', 20, [4.0, 4.0, 5.0]),
    new Student('Maria', 'Magdalena', 23, [2.0, 3.0, 2.0]),
    new Student('Jan', 'Jankowski', 24, [3.5, 4.5, 5.0]),
  ];

  rozwiniety: Student | null = null;
  pokazDodawanie = false;
  edytowany: Student | null = null;

  przelaczSzczegoly(s: Student) {
    this.rozwiniety = this.rozwiniety === s ? null : s;
  }

  dodajStudenta(s: Student) {
    this.studenci.push(s);
    this.pokazDodawanie = false;
  }
}