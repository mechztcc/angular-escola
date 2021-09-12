import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ClassroomsService } from '../../shared/classrooms.service';
import { IClassroom } from '../../shared/interfaces/classroom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  classrooms$: Observable<any>;
  classrooms: IClassroom[] = [];

  createClassroom: boolean = false;

  form: FormGroup;

  loading: boolean = false;

  constructor(private store: Store<AppState>, private classroomsService: ClassroomsService, private router: Router, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.listStore();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])]
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
    this.classroomsService.listAllByUserId()
      .subscribe((data: IClassroom[]) => {
        this.classrooms = data;
      })
  }

  validateForm() {}

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
