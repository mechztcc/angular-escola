import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  loading: boolean = false;
  loadingSubjects: boolean = false;

  createClassroom: boolean = true;
  createSubject: boolean = true;

  constructor(private schoolsService: SchoolsService, private routes: ActivatedRoute, private subjectsService: SubjectsService, private router: Router) { }

  ngOnInit(): void {
    this.schoolId = Number(this.routes.snapshot.paramMap.get('id'));
    this.listClassrooms();
    this.listAllSubjectsApi();
    
  }

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
