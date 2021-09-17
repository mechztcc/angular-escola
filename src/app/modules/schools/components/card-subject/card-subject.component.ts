import { Component, Input, OnInit } from '@angular/core';
import { ISubject } from 'src/app/modules/subjects/shared/interfaces/Subject';

@Component({
  selector: 'app-card-subject',
  templateUrl: './card-subject.component.html',
  styleUrls: ['./card-subject.component.sass']
})
export class CardSubjectComponent implements OnInit {


  @Input() subject: ISubject;

  constructor() { }

  ngOnInit(): void {
  }

}
