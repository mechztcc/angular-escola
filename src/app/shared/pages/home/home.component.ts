import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ClassroomsService } from 'src/app/modules/classrooms/shared/classrooms.service';
import { IClassroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';
import { ClassroomNew } from 'src/app/modules/classrooms/shared/store/classrooms.actions';
import { ISchool } from 'src/app/modules/schools/shared/interfaces/school';
import { IUserSchools } from 'src/app/modules/schools/shared/interfaces/user-schools';
import { SchoolsService } from 'src/app/modules/schools/shared/schools.service';
import { SchoolNew } from 'src/app/modules/schools/shared/store/schools.actions';
import { Student } from 'src/app/modules/students/shared/interfaces/student';
import { StudentAll, StudentNew } from 'src/app/modules/students/shared/store/students.actions';
import { StudentsService } from 'src/app/modules/students/shared/students.service';
import { ITeacher } from 'src/app/modules/teachers/shared/interfaces/teacher';
import { TeacherNew } from 'src/app/modules/teachers/shared/store/teachers.actions';
import { TeachersService } from 'src/app/modules/teachers/shared/teachers.service';

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
  classrooms$: Observable<any>;
  teachers$: Observable<any>;
  students$: Observable<any>;

  loadingSchools: boolean = false;
  loadingClassrooms: boolean = false;
  loadingStudents: boolean = false;
  loadingTeachers: boolean = false;


  constructor(private studentsService: StudentsService, private teachersService: TeachersService, private router: Router, private schoolsService: SchoolsService, private classroomsService: ClassroomsService,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.date = new Date();
    this.listSchoolsStore();
    this.listClassroomStore();
    this.listTeacherStore();
    this.listStudentStore();
  }

  // ******* INIT METHODS **********

  listSchoolsStore() {
    this.schools$ = this.store.pipe(select('school'));
    this.schools$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.schools = data;   
        } else {
          this.listSchoolsApi();
        }
      }
    )
  }

  listSchoolsApi() {
    this.loadingSchools = true;
     this.schoolsService.listAllSchoolsByUserId()
      .subscribe((data: ISchool[]) => {
        data.forEach((school) => {
          this.store.dispatch(new SchoolNew({ school: school })) 
        })
        this.schools = data;        
      }).add(() => {
        this.loadingSchools = false;
      })
  }


  listClassroomStore() {
    this.classrooms$ = this.store.pipe(select('classroom'));
    this.classrooms$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.classrooms = data;
        } else {
          this.listClassroomApi();
        }
      }
    )
  }

  listClassroomApi() {
    this.loadingClassrooms = true;
    this.classroomsService.listAllByUserId()
      .subscribe((data: IClassroom[]) => {
        data.forEach((classroom) => {
          this.store.dispatch(new ClassroomNew({ classroom: classroom }));
        })
      }).add(() => {
        this.loadingClassrooms = false;
      })
  }


  listTeacherStore() {
    this.schools$ = this.store.pipe(select('teacher'));
    this.schools$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.teachers = data;
        } else {
          this.listTeacherApi();
        }
      }
    )
  }

  listTeacherApi() {
    this.loadingTeachers = true;
    this.teachersService.listAllByUserId()
      .subscribe((data: ITeacher[]) => {
        data.forEach((teacher) => {
          this.store.dispatch(new TeacherNew({ teacher: teacher }));
        })
      }).add(() => {
        this.loadingTeachers = false;
      })
  }


  listStudentApi() {
    this.loadingStudents = true;
    this.studentsService.listAllByUserId()
      .subscribe((data: any) => {
        data.forEach((student) => {
          this.store.dispatch(new StudentNew({ student: student }))
        });
      }).add(() => {
        this.loadingStudents = false;
      })
  }

  listStudentStore() {
    this.students$ = this.store.pipe(select('student'));
    this.students$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.students = data;
        } else {
          this.listStudentApi();
        }
      }
    )
  }

  // ********** SUPPORT METHODS **********

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
