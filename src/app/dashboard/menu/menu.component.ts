import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { SpinnerService } from '../../shared/spinner.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpenNav = false;

  constructor(private router: Router, private authService: AuthService, private spinnerService: SpinnerService) { }

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

  private onLogOut() {
    this.spinnerService.showSpinner();
    this.authService.logOutUser();
  }
}
