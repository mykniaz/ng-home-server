import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  isAuth = false;

  constructor(private router: Router) {}

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/']).then();
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
