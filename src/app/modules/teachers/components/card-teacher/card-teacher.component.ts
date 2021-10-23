import { ITeacher } from 'src/app/modules/teachers/shared/interfaces/teacher'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-card-teacher',
  templateUrl: './card-teacher.component.html',
  styleUrls: ['./card-teacher.component.sass'],
})
export class CardTeacherComponent implements OnInit {
  @Input() teacher: ITeacher

  constructor() {}

  ngOnInit(): void {}
}
