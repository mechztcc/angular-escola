import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { Student } from '../../shared/interfaces/student';
import { StudentNew } from '../../shared/store/students.actions';
import { StudentsService } from '../../shared/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  students$: Observable<any>;
  loading: boolean = false;

  students: Student[] = [];

  createStudent: boolean = true;

  form: FormGroup;
  errors: boolean = false;

  constructor(private  studentsService: StudentsService, private store: Store<AppState>, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.listStore();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])],
      birthDay: ['', Validators.compose([
        Validators.required, Validators.minLength(10)
      ])],
      classroom: ['', ],
      responsible: ['']
    })
  }

  listStore() {
    this.students$ = this.store.pipe(select('student'));
    this.students$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.students = data;
        } else {
          this.listApi();
        }
      }
    )
  }

  listApi() {
    this.loading = true;
    this.studentsService.listAllByUserId()
      .subscribe((data: Student[]) => {
        data.forEach((student) => {
          this.store.dispatch(new StudentNew({ student: student }))
        })
       }).add(() => {
         this.loading = false;
    })
  }

  prepareNewStudent(e: any) {}

  validateForm() {}

  navigate() {}

  toggleCreate() {
    this.createStudent = !this.createStudent;
  }

  filter(v: any) {}

}
