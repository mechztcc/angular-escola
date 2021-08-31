import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ILogin } from '../../shared/interfaces/user-login';
import { IUserLoginResponse } from '../../shared/interfaces/user-login-response';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {

  icons: any = {
    faLock: faLock,
    faUser: faUser
  }

  form: FormGroup;
  loading: boolean = false;
  user: ILogin;

  get formulario() {
    return this.form.controls
  }
  errors: boolean = false;

  constructor(private router: Router, private formBuild: FormBuilder, private usersService: UsersService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initForm();

  }

  initForm() {
    this.form = this.formBuild.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  validateForm() {
    if(this.form.invalid) {
      this.errors = true;
      this.toastr.warning('Campos inválidos!');
    } else {
      this.user = { 
        email: this.form.controls.email.value, 
        password: this.form.controls.password.value
      }
      this.login();
    }
  }

  login() {
    this.loading = true;
    this.usersService.createSession(this.user)
      .subscribe((data: IUserLoginResponse) => {
        this.toastr.success('Logado com sucesso!', 'Sucesso!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.name);
        this.router.navigate(['']);
        
      }).add(() => {
        this.loading = false;
      })
  }


}
