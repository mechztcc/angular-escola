import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ISchool } from 'src/app/modules/schools/shared/interfaces/school';
import { SchoolsService } from 'src/app/modules/schools/shared/schools.service';
import { ClassroomsService } from '../../shared/classrooms.service';
import { IClassroom } from '../../shared/interfaces/classroom';
import { ClassroomNew } from '../../shared/store/classrooms.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  classrooms$: Observable<any>;
  classrooms: IClassroom[] = [];

  schools: ISchool[] = [];

  createClassroom: boolean = true;

  form: FormGroup;

  loading: boolean = false;

  classroom: IClassroom;

  errors: boolean = false;

  constructor(private toastrService: ToastrService, private store: Store<AppState>, private classroomsService: ClassroomsService, private schoolsService: SchoolsService,private router: Router, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.listStore();
    this.listAllSchools();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])],
      school: ['', Validators.required]
    })
  }


  listAllSchools() {
    this.loading = true;
    this.schoolsService.listAllSchoolsByUserId()
      .subscribe((data: ISchool[]) => {
        this.schools = data;
        console.log(data);
        
      }).add(() => {
        this.loading = false;
      })
  }

  listStore() {
    this.classrooms$ = this.store.pipe(select('classroom'));
    this.classrooms$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.classrooms = data;    
        } else { 
          this.listApi();
        }
      }
    )
  }

  listApi() {
    this.loading = true
    this.classroomsService.listAllByUserId()
      .subscribe((data: IClassroom[]) => {
        data.forEach((classroom) => {
          this.store.dispatch(new ClassroomNew({ classroom: classroom }));
        })
      }).add(() => {
        this.loading = false;
      })
  }

  setSchool() {
    this.classroom = { ...this.classroom, schooldId: this.form.controls.school.value }
    console.log(this.classroom); 
  }

  prepareNewClassroom() {
    this.classroom = { ...this.classroom, name: this.form.controls.name.value }
    this.errors = false;
    
  }

  newClassroom() {
    this.loading = true;
    this.classroomsService.create(this.classroom)
      .subscribe((data: IClassroom) => {
        this.toastrService.success('Turma criada com sucesso!', 'Sucesso!')
        this.store.dispatch(new ClassroomNew({ classroom: data }));
      }).add(() => {
        this.loading = false;
      })
  }

  validateForm() {
    if(this.form.invalid) {
      this.errors = true;
      this.toastrService.error('Formulário incorreto!', 'Falha na operação');
    } else {
      this.newClassroom();
    }
  }

  filter(name: any) {
    console.log(name);
  }

  toggleCreate() {
    this.createClassroom = !this.createClassroom;
  }

  navigate() {
    this.router.navigate([''])
  }

}
