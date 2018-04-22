import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpenNav = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach(
      (event) => {
        if (event instanceof NavigationStart) {
          this.isOpenNav = false;
        }
      }
    );
  }

  onToggleNav() {
    this.isOpenNav = !this.isOpenNav;
  }
}
