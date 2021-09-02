import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISchool } from '../../shared/interfaces/school';
import { IUserSchools } from '../../shared/interfaces/user-schools';
import { SchoolsService } from '../../shared/schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.sass']
})
export class SchoolsComponent implements OnInit {

  userSchools: ISchool[];
  loading: boolean = false;

  constructor(private schoolsService: SchoolsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.listSchools();
  }

  listSchools() {
    this.spinner.show();
    this.schoolsService.listAllByUserId()
      .subscribe((data: IUserSchools) => {
        this.userSchools = data.school;
      }).add(() => {
        this.spinner.hide();
      })
  }

}
