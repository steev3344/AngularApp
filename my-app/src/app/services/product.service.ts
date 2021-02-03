import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../network/http-error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ProductModel } from 'app/models/product';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private handleError: HandleError;
  private url: string;
  private urlGetAll: string;
  private urlUpdate:string;
  private urlDelete:string;
  private urlShow:string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.url =
    environment.api.host +
    environment.api.port +
    environment.api.api +
    environment.api.v +
    environment.services.product;
    this.urlGetAll =
    environment.api.host +
    environment.api.port +
    environment.api.api +
    environment.api.v +
    environment.services.productGet;
    this.urlDelete= `${environment.ApiHost}/product`;
    this.urlShow=`${environment.ApiHost}/product`;
    this.urlUpdate=`${environment.ApiHost}/product/update`;
    this.handleError = httpErrorHandler.createHandleError('ProductService');


}

 /**
   * GET API request to index vehicle model records
   */
  getAll(): Observable<ProductModel[]> {
    const url = `${this.urlGetAll}`;
    return this.http.get<ApiResponseModel<ProductModel[]>>(url).pipe(
      map(res => res.data),
      catchError(this.handleError('get', null))
    );
  }

  /**
   * GET API request to index vehicle model records
   */
  getOne(id: string): Observable<ProductModel[]> {
    const url = `${this.urlShow}/${id}`;
    return this.http.get<ApiResponseModel<ProductModel[]>>(url).pipe(
      map(res => res.data),
      catchError(this.handleError('get', null))
    );
  }


 delete(id: string): Observable<ProductModel> {
   const url = `${this.urlDelete}/${id}`;
   return this.http.delete<ApiResponseModel<ProductModel>>(url).pipe(catchError(this.handleError('delete', null))
   );
 }

public createOrUpdate(brandModel: ProductModel) {
  if (brandModel._id) {
    return this.update(brandModel);
  } else {
    return this.create(brandModel);
  }
}


create(productModel: ProductModel): Observable<ProductModel> {
  const inputData = productModel
  return this.http.post<ApiResponseModel<ProductModel>>(this.url, inputData).pipe(
    map(res => res.data),
    catchError(this.handleError('create', null))
  );
}


update(productModel: ProductModel): Observable<ProductModel> {
  const inputData = productModel;
  const url = `${this.urlUpdate}/${productModel._id}`;
  return this.http.put<ApiResponseModel<ProductModel>>(url, inputData).pipe(
    map(res => res.data), catchError(this.handleError('update', null))
  );
}


}
