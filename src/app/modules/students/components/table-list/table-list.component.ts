import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../shared/interfaces/student';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.sass']
})
export class TableListComponent implements OnInit {

  @Input() students: Student[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
