import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ClassroomsService } from 'src/app/modules/classrooms/shared/classrooms.service';
import { IClassroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';
import { IResponsible } from 'src/app/modules/responsibles/shared/interfaces/responsible';
import { ResponsiblesService } from 'src/app/modules/responsibles/shared/responsibles.service';
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
  classrooms$: Observable<any>;

  loading: boolean = false;
  loadingSavement: boolean = false;
  loadingClassroms: boolean = false;

  students: Student[] = [];
  classrooms: IClassroom[] = [];

  createStudent: boolean = false;

  form: FormGroup;
  errors: boolean = false;

  responsible: IResponsible;
  student: Student;

  constructor(private classroomsService: ClassroomsService, private responsiblesService: ResponsiblesService, private studentsService: StudentsService, private store: Store<AppState>, private formBuild: FormBuilder, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.listStore();
    this.listClassroomStore();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])],
      birthDay: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])],
      classroom: ['', ],
      responsibleName: ['', Validators.compose([
        Validators.required, Validators.minLength(10)
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required
      ])],
      payment: ['', Validators.compose([
        Validators.required, Validators.maxLength(2)
      ])]
    });
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

  listClassroomStore() {
    this.classrooms$ = this.store.pipe(select('classroom'));
    this.classrooms$.subscribe((data) => {
      if(data.length > 0) {
        this.classrooms = data;
      } else {
        this.listClassroomApi();
      }
    })
  }

  listClassroomApi() {
    this.loadingClassroms = true;
    this.classroomsService.listAllByUserId()
      .subscribe((data: IClassroom[]) => {
        this.classrooms = data;
      }).add(() => {
        this.loadingClassroms = false;
      })
  }

  setClassroom(value: any) {
    this.form.controls.classroom.setValue(value.target.value);
  }

  prepareNewStudent(e: any) {}

  validateForm() {
    if(this.form.invalid) {
      this.errors = true;
      this.toastrService.warning('Formulário Inválido', 'Falha na operação');
      console.log(this.form);
      
    } else {
      this.saveResponsible();
      
    }
  }

  saveResponsible() {
    this.responsible = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value,
      paymentDay: this.form.controls.payment.value
    }
    this.loadingSavement = true;
    this.responsiblesService.createResponsible(this.responsible)
      .subscribe((data: IResponsible) => {
          this.responsible = data;
          this.saveStudent(data);
      })
  }

  saveStudent(data: IResponsible) {
    this.student = {
      name: this.form.controls.name.value,
      birthDay: this.form.controls.birthDay.value,
      classroomId: this.form.controls.classroom.value,
      responsibleId: data.id
    }
    this.loadingSavement = true;
    this.studentsService.createStudent(this.student)
      .subscribe((data: Student) => {
        this.store.dispatch(new StudentNew({ student: data }));
        this.toastrService.success('Estudante cadastrado com sucesso!', 'Sucesso.');
      }).add(() => {
        this.loadingSavement = false;
      })
  }


  navigate() {
    this.router.navigate([''])
  }

  toggleCreate() {
    this.createStudent = !this.createStudent;
  }

  filter(v: any) {}

}
