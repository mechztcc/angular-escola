import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { IClassroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';
import { ISchool } from 'src/app/modules/schools/shared/interfaces/school';
import { IUserSchools } from 'src/app/modules/schools/shared/interfaces/user-schools';
import { SchoolsService } from 'src/app/modules/schools/shared/schools.service';
import { SchoolNew } from 'src/app/modules/schools/shared/store/schools.actions';
import { Student } from 'src/app/modules/students/shared/interfaces/student';
import { ITeacher } from 'src/app/modules/teachers/shared/interfaces/teacher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user: string = localStorage.getItem('user');
  email: string = '';
  schools: ISchool[] = [];
  students: Student[] = [];
  classrooms: IClassroom[] = [];
  teachers: ITeacher[] = [];
  date: Date;

  schools$: Observable<any>;


  constructor(private router: Router, private schoolsService: SchoolsService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.date = new Date();
    this.listStoreSchools();
  }

  listStoreSchools() {
    this.schools$ = this.store.pipe(select('school'));
    this.schools$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.schools = data;
        } else {
          this.listSchools();
        }
      }
    )
  }


  listSchools() {
    this.schoolsService.listAllByUserId()
      .subscribe((data: IUserSchools) => {
        this.schools = data.school;
        this.email = data.email;
        data.school.forEach((escola, index) => {

          this.store.dispatch(new SchoolNew({ school: escola }))

          if(escola.teachers.length > 0) {
            escola.teachers.forEach((teacher, index) => {
              this.teachers.push(teacher);
            })
          }
          

          if(escola.classrooms.length > 0) {

            escola.classrooms.forEach((classroom, index) => {
              this.classrooms.push(classroom);
              
              if(classroom.students.length > 0) {

                classroom.students.forEach((student, index) => {
                  this.students.push(student);
                })
                
              }

            })
          }
          

        })
        
      })
  }

  navegate(value: number) {
    switch (value) {
      case 1:
        this.router.navigate(['schools'])
        break; 
        case 2:
        this.router.navigate(['classrooms'])
        break; 
        case 3:
        this.router.navigate(['students'])
        break; 
        case 4:
        this.router.navigate(['teachers'])
        break;
      default:
        break;
    }
  }

}
