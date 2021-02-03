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
  private urlLogin: string;
  private urlRegister:string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.urlLogin =`${environment.ApiHost}/user/login`;
    this.urlRegister =`${environment.ApiHost}/user/register`;
    this.handleError = httpErrorHandler.createHandleError('UserService');
}
/**
 * 
 * @param userModel 
 *  Function for Performing Login Action For User
 */
login(userModel: UserModel): Observable<UserModel> {
  const url = `${this.urlLogin}`;
  const inputData = userModel;
  return this.http.post<ApiResponseModel<UserModel>>(url, inputData).pipe(
    map(res => res.data),
    catchError(this.handleError('login', null))
  );
}

/**
 * 
 * @param userModel 
 *  Function for Creating New User
 */

create(userModel:  UserModel): Observable< UserModel> {
  const inputData = 
  userModel
  ;
  return this.http
    .post<ApiResponseModel< UserModel>>(this.urlRegister, inputData)
    .pipe(
      map((res) => res.data),
      catchError(this.handleError('create', null))
    );
}


}
