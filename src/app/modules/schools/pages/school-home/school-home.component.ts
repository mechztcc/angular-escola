import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassroomsService } from 'src/app/modules/classrooms/shared/classrooms.service';
import { IClassroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';
import { ISubject } from 'src/app/modules/subjects/shared/interfaces/Subject';
import { SubjectsService } from 'src/app/modules/subjects/shared/subjects.service';
import { IClassroomsOfSchool } from '../../shared/interfaces/classrooms-of-school';
import { ISchool } from '../../shared/interfaces/school';
import { SchoolsService } from '../../shared/schools.service';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.sass']
})
export class SchoolHomeComponent implements OnInit {

  schoolId: number;
  school: ISchool;
  classrooms: IClassroom[] = [];
  subjects: ISubject[] = [];
  classroom: IClassroom;
  subject: ISubject;

  form: FormGroup;

  formSubject: FormGroup;

  loading: boolean = false;
  loadingSubjects: boolean = false;

  createClassroom: boolean = false;
  createSubject: boolean = false;
  errors: boolean = false;

  constructor(private classroomsService: ClassroomsService, private toastrService: ToastrService, private formBuild: FormBuilder, private schoolsService: SchoolsService, private routes: ActivatedRoute, private subjectsService: SubjectsService, private router: Router) { }

  ngOnInit(): void {
    this.schoolId = Number(this.routes.snapshot.paramMap.get('id'));
    this.listClassrooms();
    this.listAllSubjectsApi();
    this.initForm();
    
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.formSubject = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required
      ])]
    })


  }



  // Mudar isso!!!
  listClassrooms() {
    this.loading = true;
    this.schoolsService.listAllClassrooms(this.schoolId)
      .subscribe((data: IClassroomsOfSchool) => {
        this.school = {
          id: data.id,
          name: data.name,
          created_at: data.created_at,
          updated_at: data.updated_at,
        };
        this.classrooms = data.classrooms;
        
      }).add(() => {
        this.loading = false;
      })
  }

  listAllSubjectsApi() {
    this.loadingSubjects = true;
    this.subjectsService.listAllBySchool(this.schoolId)
    .subscribe((data: ISubject[]) => {
        this.subjects = data;
        console.log(data);
      }).add(() => {
        this.loadingSubjects = false;
      })
  }

  validateClassroom() {
    if(this.form.invalid) {
      this.errors = true;
      this.toastrService.warning('Campo inv??lido', 'Falha na opera????o.')
    } else {
      this.save();
    }
  }

  validateSubject() {
    if(this.formSubject.invalid) {
      this.errors = true;
      this.toastrService.warning('Campo inv??lido', 'Falha na opera????o.')
    } else {
      this.saveSubject();
    }
  }

  saveSubject() {
    this.loading = true;
    this.subject = {
      name: this.formSubject.controls.name.value,
      schoolId: this.schoolId
    }

    this.subjectsService.createSubject(this.subject)
      .subscribe((data: any) => {
        this.toastrService.success('Disciplina cadastrada com sucesso!', 'Sucesso.');
        this.listAllSubjectsApi();
      }).add(() => {
        this.loading = false;
      })
  }

  save() {
    this.loading = true;
    this.classroom = {
      name: this.form.controls.name.value,
      schoolId: this.schoolId
    }

    this.classroomsService.create(this.classroom)
      .subscribe((data: any) => {
        this.toastrService.success('Turma cadastrada com sucesso!', 'Sucesso.');
        this.listClassrooms();
      }).add(() => {
        this.loading = false;
      })
  }

  navigate() {
    this.router.navigate(['schools'])
  }

  toggleCreateClassroom() {
    this.createClassroom = !this.createClassroom;
  }

  toggleCreateSubject() {
    this.createSubject = !this.createSubject;
  }

}
