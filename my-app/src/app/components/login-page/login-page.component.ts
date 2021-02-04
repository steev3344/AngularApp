import { Component, OnInit } from '@angular/core';
import { UserModel } from 'app/models/user-model';
import { UserService } from 'app/services/user.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 userModel: UserModel = {};
 passwordViewToggle = true;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  /**
   * Login action
   */
  actionSubmit(loginForm: NgForm) {
     if (this.userModel.email && this.userModel.password) {
       this.userService.login(this.userModel).subscribe(res => {
         if (res.token) {
        this.alertService.success(`${res.username} logged in Successfully`);
        this.authService.sendToken(res._id);
        this.toHome();
      } else {
        this.alertService.error(`Username or Password is Incorrect`);
        loginForm.form.reset();
      }
      });
     }
  }

  /**
   * navigate to home page
   */
  toHome() {
    this.router.navigate(['home']);
  }

}
