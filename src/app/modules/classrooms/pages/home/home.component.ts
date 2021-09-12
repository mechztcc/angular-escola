import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ClassroomsService } from '../../shared/classrooms.service';
import { IClassroom } from '../../shared/interfaces/classroom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  classrooms$: Observable<any>;
  classrooms: IClassroom[] = [];

  constructor(private store: Store<AppState>, private classroomsService: ClassroomsService) { }

  ngOnInit(): void {
    this.listStore();
  }

  listStore() {
    this.classrooms$ = this.store.pipe(select('classroom'));
    this.classrooms$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.classrooms = data;
          console.log(this.classrooms);
          
        } else {
          this.listApi();
        }
      }
    )
  }

  listApi() {
    
    
  }

}
