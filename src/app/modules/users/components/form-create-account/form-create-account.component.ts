import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserCreateAccount } from '../../shared/interfaces/user-create';
import { IUserLoginResponse } from '../../shared/interfaces/user-login-response';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.sass']
})
export class FormCreateAccountComponent implements OnInit {


  form: FormGroup;
  loading: boolean = false;
  user: IUserCreateAccount;
  errors: boolean = false;

  get formulario() {
    return this.form.controls
  }

  constructor(private usersService: UsersService, private formBuild: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuild.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      repeatPassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
    })
  }

  validateForm() {
    if(this.form.invalid) {
      this.errors = true;
      this.toastr.warning('Campos inválidos');

    } if(this.form.controls.password.value != this.form.controls.repeatPassword.value) {
      this.errors = true;
      this.toastr.warning('Senhas divergentes');
      
    } else {
      this.user = { 
        name: this.form.controls.name.value,
        email: this.form.controls.email.value, 
        password: this.form.controls.password.value
      }
      this.createAccount();    
    }
  }

  createAccount() {
    this.usersService.createAccount(this.user)
      .subscribe((data: IUserLoginResponse) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.name);
        this.router.navigate(['']);
      })
  }

}
