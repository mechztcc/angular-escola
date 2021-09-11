import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ISchool } from '../../shared/interfaces/school';

@Component({
  selector: 'app-card-select-school',
  templateUrl: './card-select-school.component.html',
  styleUrls: ['./card-select-school.component.sass']
})
export class CardSelectSchoolComponent implements OnInit {

  @Input() school: ISchool;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToSchool() {
    this.router.navigate([`schools/${this.school.id}`]);
  }

}
