import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router, private formBuild: FormBuilder) {
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

}
