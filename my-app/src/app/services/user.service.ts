import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../network/http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { UserModel } from 'app/models/user-model';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private handleError: HandleError;
  private url: string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.url =
    environment.api.host +
    environment.api.port +
    environment.api.api +
    environment.api.v +
    environment.services.user;
    this.handleError = httpErrorHandler.createHandleError('UserService');
}

login(userModel: UserModel): Observable<UserModel> {
  const url = `${this.url}/usertoken`;
  const inputData = userModel;
  return this.http.post<ApiResponseModel<UserModel>>(url, inputData).pipe(
    map(res => res.data),
    catchError(this.handleError('login', null))
  );
}

}
