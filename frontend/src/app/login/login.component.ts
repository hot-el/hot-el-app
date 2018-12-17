import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  role = '';

  constructor(private router: Router, private navbarService: NavbarService) {
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit() {
  }

  loginUser() {
    this.navbarService.updateNavAfterAuth('user');
    this.navbarService.updateLoginStatus(true);
    this.role = 'user';
  }

  loginManager() {
    this.navbarService.updateNavAfterAuth('manager');
    this.navbarService.updateLoginStatus(true);
    this.role = 'manager';
  }

  registerUser() {
    this.router.navigate(['signup']);
  }
}
