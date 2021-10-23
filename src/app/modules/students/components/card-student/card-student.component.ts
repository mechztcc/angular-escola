import { Student } from 'src/app/modules/students/shared/interfaces/student'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.sass'],
})
export class CardStudentComponent implements OnInit {
  @Input() student: Student

  constructor() {}

  ngOnInit(): void {}
}
