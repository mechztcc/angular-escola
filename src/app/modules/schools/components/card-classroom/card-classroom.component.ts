import { Component, Input, OnInit } from '@angular/core';
import { Classroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';

@Component({
  selector: 'app-card-classroom',
  templateUrl: './card-classroom.component.html',
  styleUrls: ['./card-classroom.component.sass']
})
export class CardClassroomComponent implements OnInit {


  @Input() classroom: Classroom;

  constructor() { }

  ngOnInit(): void {
    console.log(this.classroom);
    
  }

}
