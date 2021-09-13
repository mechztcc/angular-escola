import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { ICreateScholl } from '../../shared/interfaces/create-school';
import { ISchool } from '../../shared/interfaces/school';
import { IUserSchools } from '../../shared/interfaces/user-schools';
import { SchoolsService } from '../../shared/schools.service';
import { SchoolNew } from '../../shared/store/schools.actions';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.sass']
})
export class SchoolsComponent implements OnInit, OnChanges {

  userSchools: ISchool[] = [];
  loading: boolean = false;
  schoolFilter: ISchool[];

  createSchool: boolean = false;
  form: FormGroup;
  school: ICreateScholl;

  schools$: Observable<any>;


  constructor(private router: Router, private schoolsService: SchoolsService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private toastr: ToastrService, private store: Store<AppState>) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.schoolFilter = this.userSchools; 
  }

  ngOnInit(): void {
    this.initForm();
    this.listStore();
    
  }

  listStore() {
    this.schools$ = this.store.pipe(select('school'));
    this.schools$.subscribe(
      (data) => {
        if(data.length > 0) {
          this.userSchools = data;   
           
        } else {
          this.listSchools();
        }
      }
    )
  }

  filter(name: any) {

    
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  listSchools() {
    this.spinner.show();
    this.schoolsService.listAllSchoolsByUserId()
      .subscribe((data: ISchool[]) => {
        data.forEach((school) => {
          this.store.dispatch(new SchoolNew({ school: school })) 
        })
      }).add(() => {
        this.spinner.hide();
      })
  }

  toggleCreate() {
    this.createSchool = !this.createSchool
  }

  validateForm() {
    if(this.form.invalid) {
      this.toastr.warning('Nome Inválido', 'Falha ao criar escola');
    } else {
      this.create();
    }
  }

  prepareNewSchool(event: any) {
    this.school = { name: this.form.controls.name.value }
  }

  create() {
    this.loading = true;
    this.schoolsService.createSchool(this.school)
      .subscribe((data: ISchool) => {
        this.store.dispatch(new SchoolNew({ school: data })) 
      }).add(() => {
        this.loading = false;
      })
  }

  atualizar() {
    this.listSchools();
  }

  navigate() {
    this.router.navigate([''])
  }

}
