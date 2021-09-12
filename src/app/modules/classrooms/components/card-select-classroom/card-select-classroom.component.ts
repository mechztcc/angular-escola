import { Component, Input, OnInit } from '@angular/core';
import { IClassroom } from '../../shared/interfaces/classroom';

@Component({
  selector: 'app-card-select-classroom',
  templateUrl: './card-select-classroom.component.html',
  styleUrls: ['./card-select-classroom.component.sass']
})
export class CardSelectClassroomComponent implements OnInit {


  @Input() classroom: IClassroom;

  constructor() { }

  ngOnInit(): void {
  }

}
