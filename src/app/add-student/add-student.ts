import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {
  dodaj = output<Student>();
  imie = '';
  nazwisko = '';
  wiek: number | null = null;

  zapisz() {
    if (!this.imie || !this.nazwisko || !this.wiek) {
      alert('Uzupełnij wszystkie pola');
      return;
    }
    this.dodaj.emit(new Student(this.imie, this.nazwisko, this.wiek));
  }
}