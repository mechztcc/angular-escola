import { Component, Input, OnInit } from '@angular/core';
import { ISchool } from '../../shared/interfaces/school';

@Component({
  selector: 'app-card-select-school',
  templateUrl: './card-select-school.component.html',
  styleUrls: ['./card-select-school.component.sass']
})
export class CardSelectSchoolComponent implements OnInit {

  @Input() school: ISchool;

  constructor() { }

  ngOnInit(): void {
    console.log(this.school);
    
  }

}
