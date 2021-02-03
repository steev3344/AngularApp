import { Component, OnInit } from '@angular/core';;
import { UserModel } from 'app/models/user-model';
import { UserService } from 'app/services/user.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { AlertActionModel } from 'app/shared/models/alert-action-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}
  userModel: UserModel = {};
  ngOnInit(): void {} 


   /**
   * function For Register
   */
  saveForm() {
    this.userService.create(this.userModel).subscribe((res) => {
      if (res) {
        this.alertService.success(
          `  ${this.userService.create ? 'Added' : 'Added'} successfully`,
          'AddorUpdate'
        );
        const alertListener = this.alertService
          .getAction('AddorUpdate')
          .subscribe((alertActionModel: AlertActionModel) => {
            if (
              alertActionModel.actionId === 1 &&
              alertActionModel.functionName === 'AddorUpdate'
            ) {
              alertListener.unsubscribe();
              this.action();
            }
          });
      }
    });
  }
  /**
   *  function to locate to result page
   */
  public action() {
    this.router.navigateByUrl('');
  }
}
