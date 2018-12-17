import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { NavbarService } from './_services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'Hot-El';

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;

  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'manager', component: ManagerComponent }
    );
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['home']);
  }

}
