import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ISchool } from 'src/app/modules/schools/shared/interfaces/school';
import { SchoolsService } from 'src/app/modules/schools/shared/schools.service';
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

  schools: ISchool[] = [];

  loading: boolean = false;
  createTeacher: boolean = false;

  loadingSchools: boolean = false;

  form: FormGroup;

  constructor(private store: Store<AppState>, private teachersService: TeachersService, private router: Router, private formBuild: FormBuilder, private schoolsService: SchoolsService) { }

  ngOnInit(): void {
    this.listStore();
    this.initForm();
    this.listSchools();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      subject: ['', Validators.compose([
        Validators.required
      ])],
      paymentDay: ['', Validators.compose([
        Validators.required, Validators.maxLength(2)
      ])],
      school: ['', ],
    })
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


  listSchools() {
    this.loadingSchools = true;
    this.schoolsService.listAllSchoolsByUserId()
      .subscribe((data: ISchool[]) => {
        this.schools = data;
      }).add(() => {
        this.loadingSchools = false;
      })
  }

  validateForm() {}

  setTeacherName() {}

  navigate() {
    this.router.navigate(['']);
  }

  toggleCreate() {
    this.createTeacher = !this.createTeacher;
  }

  filter(event: any) {}

}
