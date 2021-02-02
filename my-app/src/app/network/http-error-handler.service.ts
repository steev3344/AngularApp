import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { AlertService } from '../shared/services/alert/alert.service';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: AlertService) {}

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>(
    operation = 'operation',
    result = {} as T
  ) => this.handleError(serviceName, operation, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      if (error.status === 200) {
        return null as any;
      }
      let message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : error.error
          ? error.error.error_description
          : 'Unknown Error';
      if (error.error instanceof ProgressEvent) {
        message = `${error.statusText} , Cannot Perform Current Action!`;
      }
      if (!message) {
        message = error.error.error;
      }
      if (error instanceof ErrorEvent) {
        message = error;
      }
      if (message) {
        this.messageService.error(`${message}`);
        return of(error.error as T);
      }
      // Let the app keep running by returning a safe result.
      return of(error.error as T);
    };
  }
}
