import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { ManagerComponent } from '../manager/manager.component';
import { Router } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'manager', component: ManagerComponent }
    );
  }

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['home']);
  }

}
