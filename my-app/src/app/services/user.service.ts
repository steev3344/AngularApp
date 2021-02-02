import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../network/http-error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private url2:string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.url =
    environment.api.host +
    environment.api.port +
    environment.api.api +
    environment.api.v +
    environment.services.user;
    this.handleError = httpErrorHandler.createHandleError('UserService');
    this.url2 =
    environment.api.host +
    environment.api.port +
    environment.api.api +
    environment.api.v +
    environment.services.register;
    this.handleError = httpErrorHandler.createHandleError('UserService');
    

}

login(userModel: UserModel): Observable<UserModel> {
  const url = `${this.url}`;
  const inputData = userModel;
  return this.http.post<ApiResponseModel<UserModel>>(url, inputData).pipe(
    map(res => res.data),
    catchError(this.handleError('login', null))
  );
}
create(userModel:  UserModel): Observable< UserModel> {
  const inputData = 
  userModel
  ;
  return this.http
    .post<ApiResponseModel< UserModel>>(this.url2, inputData)
    .pipe(
      map((res) => res.data),
      catchError(this.handleError('create', null))
    );
}


}
