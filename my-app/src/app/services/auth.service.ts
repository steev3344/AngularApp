import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
/**
   * to store token in local storage
   * @param token user id
   */
  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }

  /**
   * to get token from local storage
   */
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }

  /**
   * to check is logged in
   */
  isLoggedIn() {
    return this.getToken() !== null;
  }

  /**
   * to remove token from local storage when logout
   */
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.router.navigate(['']);
  }

}

