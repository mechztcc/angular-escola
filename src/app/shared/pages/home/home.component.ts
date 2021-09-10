import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISchool } from 'src/app/modules/schools/shared/interfaces/school';
import { IUserSchools } from 'src/app/modules/schools/shared/interfaces/user-schools';
import { SchoolsService } from 'src/app/modules/schools/shared/schools.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user: string = localStorage.getItem('user');
  email: string = '';
  schools: ISchool[] = [];

  constructor(private router: Router, private schoolsService: SchoolsService) { }

  ngOnInit(): void {
    this.listSchools();
  }


  listSchools() {
    this.schoolsService.listAllByUserId()
      .subscribe((data: IUserSchools) => {
        this.schools = data.school;
        this.email = data.email;  
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
