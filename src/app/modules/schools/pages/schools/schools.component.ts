import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ICreateScholl } from '../../shared/interfaces/create-school';
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

  createSchool: boolean = false;
  form: FormGroup;
  school: ICreateScholl;

  constructor(private schoolsService: SchoolsService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listSchools();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    })
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

  toggleCreate() {
    this.createSchool = !this.createSchool
  }

  validateForm() {
    if(this.form.invalid) {
      this.toastr.warning('Nome Inválido', 'Falha ao criar escola');
    } else {
      this.salvar();
    }
  }

  salvar() {
    this.school = { name: this.form.controls.name.value }
    this.loading = true;
    this.schoolsService.creteSchool(this.school)
      .subscribe((data: any) => {
        this.toastr.success('Escola criada com sucesso!', 'Sucesso!');
      }).add(() => {
        this.loading = false;
        this.atualizar();
      })
  }

  atualizar() {
    this.listSchools();
  }

}
