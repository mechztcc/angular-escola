import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from 'src/app/modules/classrooms/shared/interfaces/classroom';
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
  classrooms: Classroom[] = [];

  loading: boolean = false;

  constructor(private schoolsService: SchoolsService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.schoolId = Number(this.routes.snapshot.paramMap.get('id'));
    console.log(this.schoolId);
    this.listClassrooms();
    
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

}
