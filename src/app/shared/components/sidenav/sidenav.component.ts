import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faGraduationCap, faChalkboardTeacher, faSchool, faUser, faHouseUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  icons = {
    faGraduationCap: faGraduationCap,
    faChalkboardTeacher: faChalkboardTeacher,
    faSchool: faSchool,
    faUser: faUser,
    faHouseUser: faHouseUser,
    faSignOutAlt: faSignOutAlt
  }

  screenSize: number = window.innerWidth;
  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['users/login']);
  }

}
