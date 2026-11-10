import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  imports: [FormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent {
  @Input({ required: true }) student!: Student;
  zamknij = output<void>();
  nowaOcena = 3;

  dodajOcene() {
    if (this.nowaOcena >= 2 && this.nowaOcena <= 5) {
      this.student.dodajOcene(this.nowaOcena);
    } else {
      alert('Ocena musi być od 2 do 5');
    }
  }
}