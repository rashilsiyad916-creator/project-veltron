import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_KEY = 'user';
  private TOKEN_KEY = 'token';

  constructor(private router: Router) {}

  register(userData: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }

  login(credentials: any): boolean {
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (!storedUser) return false;

    const user = JSON.parse(storedUser);

    const valid =
      user.email === credentials.email &&
      user.password === credentials.password;

    if (valid) {
      localStorage.setItem(this.TOKEN_KEY, 'dummy-jwt-token');
    }

    return valid;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
