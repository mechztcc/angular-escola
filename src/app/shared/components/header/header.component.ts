import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  icons = {
    faBars: faBars
  }

  opened: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  toggle() {
    this.opened = !this.opened;
  }

  exit() {
    localStorage.clear();
  }

}
