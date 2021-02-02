import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertActionModel } from '../../models/alert-action-model';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private action = new Subject<AlertActionModel>();
  private loading = new Subject<boolean>();
  private loadingToolbar = new Subject<boolean>();
  private functionName!: string;

  constructor(
    private dialog: MatDialog
  ) { }

  success(message: string, actionName?: string, positiveActionText: string = 'Ok', negativeActionText: string = '') {
    this.functionName = actionName;
    this.alert(1, message, positiveActionText, negativeActionText);
  }

  info(message: string, actionName?: string, positiveActionText: string = 'Ok', negativeActionText: string = '') {
    this.functionName = actionName;
    this.alert(2, message, positiveActionText, negativeActionText);
  }

  warn(message: string, actionName?: string, positiveActionText: string = 'Ok', negativeActionText: string = '') {
    this.functionName = actionName;
    this.alert(3, message, positiveActionText, negativeActionText);
  }

  error(message: string, actionName?: string, positiveActionText: string = 'Ok', negativeActionText: string = '') {
    this.functionName = actionName;
    this.alert(4, message, positiveActionText, negativeActionText);
  }


  alert(type: number, message: string, positiveActionText: string = 'Ok', negativeActionText: string = '') {
    this.dialog.open(
      AlertComponent,
      {
        data: {
          message,
          theme: this.getTheme(type),
          icon: this.getIcon(type),
          actionPositive: positiveActionText,
          actionNegative: negativeActionText,
          actionNeutral: '',
          alertService: this
        }
      }
    );
  }

  getTheme(type: number): string {
    switch (type) {
      case 1: return 'alert-wrapper success-wrapper';
      case 2: return 'alert-wrapper info-wrapper';
      case 3: return 'alert-wrapper warning-wrapper';
      default: return 'alert-wrapper error-wrapper';
    }
  }

  getIcon(type: number): string {
    switch (type) {
      case 1: return 'check_circle';
      case 2: return 'help';
      case 3: return 'warning';
      default: return 'error';
    }
  }

  onAction(type: number) {
    this.action.next({ functionName: this.functionName, actionId: type });
  }

  /**
   * Function get subscribction for alert dialog actions
   *
   * @param functionName the function name which it's subcribing
   *
   * @returns Observable AlertActionModel which have params function name and actionId - in that actionId - 0 - Neutral action, actionId - 1-Positive action, actionId - 2 - Negative action
   */
  getAction(functionName?: string): Observable<AlertActionModel> {
    this.functionName = functionName;
    return this.action.asObservable();
  }

  public getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  public getLoadingToolbar(): Observable<boolean> {
    return this.loadingToolbar.asObservable();
  }

  setLoadingToolbar(loading: boolean) {
    this.loadingToolbar.next(loading);
  }
}
