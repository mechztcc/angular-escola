import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ITeacher } from '../../shared/interfaces/teacher';
import { TeacherNew } from '../../shared/store/teachers.actions';
import { TeachersService } from '../../shared/teachers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  teachers$: Observable<any>;
  teachers: ITeacher[] = [];

  loading: boolean = false;

  constructor(private store: Store<AppState>, private teachersService: TeachersService) { }

  ngOnInit(): void {
    this.listStore();
  }

  listStore() {
    this.teachers$ = this.store.pipe(select('teacher'));
    this.teachers$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.teachers = data;
          
        } else {
          this.listApi();
        }
      }
    )
  }

  listApi() {
    this.loading = true;
    this.teachersService.listAllByUserId()
      .subscribe((data: ITeacher[]) => {
        data.forEach((teacher) => {
          this.store.dispatch(new TeacherNew({ teacher: teacher })); 
        })
      }).add(() => {
        this.loading = false;
      })
  }

}
