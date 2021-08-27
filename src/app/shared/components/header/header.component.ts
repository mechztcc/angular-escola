import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

    if(this.opened) {
      document.getElementById('sidenav')?.classList.add('hidden');
      document.getElementById('content')?.classList.remove('w-75');
      document.getElementById('content')?.classList.remove('ml-25');
      this.opened = !this.opened;
    } else {
      document.getElementById('sidenav')?.classList.remove('hidden');
      document.getElementById('content')?.classList.add('w-75');
      document.getElementById('content')?.classList.add('ml-25');
      this.opened = !this.opened;
    }

  }

}
