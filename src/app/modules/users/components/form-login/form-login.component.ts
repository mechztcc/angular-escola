import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private router: Router, private formBuild: FormBuilder, private usersService: UsersService) {
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
    localStorage.setItem('token', 'asasa');
    this.router.navigate(['']);
  }

  login() {
    this.usersService.createSession();
  }


}
